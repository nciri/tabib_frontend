import React from "react";
import { Link } from "react-router-dom";

const SimpleDoctorCard = ({ id, name, specialty, address, profileImage }) => {
  return (
    <div className="simple-doctor-card">
      <div className="simple-doctor-card-container">
        {/* Image de profil */}

        <div className="simple-doctor-image-container">
          <img
            src={profileImage}
            alt={`${name}`}
            className="simple-doctor-image"
          />
        </div>

        {/* Informations du médecin */}

        <div className="simple-doctor-info">
          <h3 className="simple-doctor-name">
            <Link to={`/practitioner/${id}`}>{name}</Link>
          </h3>
          <p className="simple-doctor-specialty">{specialty}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleDoctorCard;
