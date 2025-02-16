"use client";

import React, { JSX, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiClipboard, FiDownload } from "react-icons/fi";
import TagManager from 'react-gtm-module';

export default function Home(): JSX.Element {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "GTM-TKKZVT44",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  // Fonction pour récupérer la miniature
  const handleFetchThumbnail = (): void => {
    const url = getThumbnailUrl(videoUrl);
    if (url) {
      setThumbnail(url);
    } else {
      alert("Invalid link");
    }
  };

  // Fonction corrigée pour extraire l'ID de la vidéo YouTube
  const getThumbnailUrl = (videoUrl: string): string | null => {
    try {
      const url = new URL(videoUrl);
      const videoId =
        url.searchParams.get("v") || url.pathname.split("/").pop();
      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      }
    } catch (error) {
      console.error("Lien invalide :", error);
      return null;
    }
    return null;
  };

  // Fonction pour coller depuis le presse-papiers
  const handlePaste = async (): Promise<void> => {
    try {
      const text = await navigator.clipboard.readText();
      setVideoUrl(text);
    } catch (error) {
      console.error("Impossible de coller depuis le presse-papiers", error);
    }
  };

  // Fonction pour télécharger l'image
  const handleDownload = async (): Promise<void> => {
    if (thumbnail) {
      try {
        // Récupérer l'image en tant que blob
        const response = await fetch(thumbnail);
        const blob = await response.blob();

        // Créer une URL temporaire pour le blob
        const blobURL = URL.createObjectURL(blob);

        // Créer un lien temporaire pour télécharger l'image
        const link = document.createElement("a");
        link.href = blobURL;
        link.download = "youtube-thumbnail.jpg"; // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();

        // Nettoyer après le téléchargement
        document.body.removeChild(link);
        URL.revokeObjectURL(blobURL);
      } catch (error) {
        console.error("Erreur lors du téléchargement :", error);
      }
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 z-[2]"
      >
        <h1 className="text-4xl font-bold font-poppins">
          <span className="text-purple-600">Capture</span> your YouTube
          thumbnails
          <br />
          In the blink of an eye 🚀
        </h1>
        <p className="text-lg mt-2 text-gray-600">
          Transform any YouTube link into a high-quality image, for free.
        </p>
      </motion.div>

      {/* Input Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="flex gap-4 w-full max-w-lg z-[2] px-4"
      >
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Paste the Youtube url here..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-md"
          />
          {/* Bouton Coller */}
          <button
            onClick={handlePaste}
            className="absolute inset-y-0 m-auto right-2 flex items-center justify-center w-8 h-8 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300"
            title="Coller depuis le presse-papiers"
          >
            <FiClipboard size={16} />
          </button>
        </div>
        <motion.button
          onClick={handleFetchThumbnail}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-full bg-purple-500 text-white font-bold hover:bg-purple-600 shadow-lg"
        >
          Search
        </motion.button>
      </motion.div>

      {/* Thumbnail Display */}
      {thumbnail && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center z-[2]"
        >
          <div className="relative w-[80vw] max-w-4xl aspect-video">
            {/* Bouton Télécharger */}
            <button
              onClick={handleDownload}
              className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-300 z-[3]"
              title="Télécharger l'image"
            >
              <FiDownload size={20} />
            </button>
            {/* Image */}
            <Image
              src={thumbnail}
              alt="YouTube Thumbnail"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
              className="shadow-xl object-cover rounded-lg"
            />
          </div>
          <p className="mt-4 text-purple-600 font-medium">
            Your thumbnail is ready is to download!
          </p>
        </motion.div>
      )}

    </div>
  );
}
