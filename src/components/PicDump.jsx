// src/components/PicDump.jsx
import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../context/AuthContext";
import "./PicDump.css";

const PicDump = () => {
  const { user } = useAuth();
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  // Fetch images from private bucket and generate signed URLs
  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from("images").list("", { limit: 100 });
    if (error) {
      console.log("Error fetching images:", error.message);
      return;
    }

    // Generate signed URLs for private access
    const imagesWithUrls = await Promise.all(
      data.map(async (img) => {
        const { data: urlData, error: urlError } = await supabase.storage
          .from("images")
          .createSignedUrl(img.name, 60 * 60); // URL valid for 1 hour
        if (urlError) {
          console.error("Error creating signed URL:", urlError);
          return null;
        }
        return { ...img, url: urlData.signedUrl };
      })
    );

    setImages(imagesWithUrls.filter(Boolean));
  };

  useEffect(() => {
    if (user) fetchImages();
  }, [user]);

  // Upload image
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;

    setUploading(true);
    const fileName = `${user.id}-${Date.now()}-${file.name}`;
    const { error } = await supabase.storage.from("images").upload(fileName, file);
    setUploading(false);

    if (error) alert("Upload failed: " + error.message);
    else fetchImages();
  };

  if (!user) return <p>Please log in to see the gallery.</p>;

  return (
    <div className="pic-dump-container">
      <h1 className="pic-dump-header">Our Picture Gallery</h1>

      <input
        type="file"
        onChange={uploadImage}
        disabled={uploading}
        style={{ marginBottom: "20px" }}
      />
      {uploading && <p>Uploading...</p>}

      <div className="pic-dump-grid">
        {images.map((img) => (
          <div key={img.name} className="pic-dump-item">
            <img src={img.url} alt={img.name} className="pic-dump-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PicDump;
