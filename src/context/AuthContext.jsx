import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession().then(res => {
      if(res.data?.session?.user) {
        setUser(res.data.session.user);
        fetchProfile(res.data.session.user.id);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser(session.user);
        fetchProfile(session.user.id);
      } else {
        setUser(null);
        setProfile(null);
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const fetchProfile = async (id) => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();

    if (error) console.log("Fetch profile error:", error);
    else setProfile(data);
  };

  const signUp = async (email, password, name) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.log("Signup error:", error);
      return;
    }

    if (data.user) {
      // Insert profile row
      const { error: profileError } = await supabase
        .from("profiles")
        .insert([{ id: data.user.id, email, name }]);
      if (profileError) console.log("Profile insert error:", profileError);
      else setProfile({ id: data.user.id, email, name });

      setUser(data.user);
    }
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.log("Login error:", error);
      return;
    }
    setUser(data.user);
    fetchProfile(data.user.id);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  };

  return (
    <AuthContext.Provider value={{ user, profile, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
