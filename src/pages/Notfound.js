"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import Image from "../assets/notfound.png";
import "./Notfound.css";
import { Link } from "react-router-dom";


const NotFound = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="icon-box">
          <AlertTriangle size={48} className="icon" />
        </div>
        <h1 className="heading">404 - Page Not Found</h1>
        <p className="description">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <div className="back-link">
            <ArrowLeft size={20} className="arrow-icon" />
            <span>Go back to Home</span>
          </div>
        </Link>
      </div>
      {showImage && (
        <div className="image-box">
         <img src={Image} alt="404 not found" />

        </div>
      )}
    </div>
  );
};

export default NotFound;
