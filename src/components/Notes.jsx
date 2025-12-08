// src/components/Notes.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../context/AuthContext";
import "./Notes.css";

const Notes = () => {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch notes
  const fetchNotes = async () => {
    setLoading(true);
    const { data, error } = await supabase.from("notes").select("*").order("created_at", { ascending: false });
    if (error) console.log("Error fetching notes:", error.message);
    else setNotes(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchNotes();
  }, [user]);

  // Add new note
  const addNote = async () => {
    if (!newNote.trim()) return;
    const { error } = await supabase.from("notes").insert([{ user_id: user.id, content: newNote }]);
    if (error) alert("Error adding note: " + error.message);
    else {
      setNewNote("");
      fetchNotes();
    }
  };

  // Delete note
  const deleteNote = async (id) => {
    const noteToDelete = notes.find((n) => n.id === id);
    if (!noteToDelete) return;
    if (noteToDelete.user_id !== user.id) return alert("You can only delete your own notes");

    const { error } = await supabase.from("notes").delete().eq("id", id);
    if (error) alert("Error deleting note: " + error.message);
    else fetchNotes();
  };

  if (!user) return <p>Please log in to see the notes.</p>;

  return (
    <div className="notes-container">
      <h1 className="notes-header">Our Notes</h1>

      <div className="notes-input-wrapper">
        <input
          type="text"
          placeholder="Write a new note..."
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="notes-input"
        />
        <button onClick={addNote} className="notes-button">Add</button>
      </div>

      {loading ? (
        <p>Loading notes...</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note.id} className="note-card">
              <p className="note-content">{note.content}</p>
              {note.user_id === user.id && (
                <button className="note-delete" onClick={() => deleteNote(note.id)}>Delete</button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notes;
