"use client";
import React, { useState } from "react";
import Component from "@/components/ui/underline-hero-section";

export default function Demo() {
  const [message, setMessage] = useState<string>("");

  const onSignIn = () => {
    setMessage("Sign In clicked");
    setTimeout(() => setMessage(""), 3000);
  };

  const onTryForFree = () => {
    setMessage("Try for Free clicked");
    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" />
      <style>{`
        .font-lobster { 
          font-family: 'Lobster', cursive; 
        }
        
        .demo-message {
          position: fixed;
          top: 80px;
          right: 20px;
          background: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
          padding: 12px 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px hsl(var(--foreground) / 0.1);
          z-index: 100;
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>

      {message && (
        <div className="demo-message">
          {message}
        </div>
      )}

      <Component 
        brand="SaaS"
        heroClassName="font-lobster" 
        onSignIn={onSignIn} 
        onTryForFree={onTryForFree} 
      />
    </>
  );
}


