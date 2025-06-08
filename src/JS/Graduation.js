import React from "react";
import "../CSS/Graduation.css";
import { HSMWLogo } from "./Icons";

const Graduation = () => {
  return (
    <div className="graduation-card">
      {/* Hochschule Abschnitt */}
      <div className="flex items-center">
        <div className="graduation-logo">
          <HSMWLogo />
        </div>
        <div>
          <h2 className="text-xl">Hochschule Mittweida</h2>
          <p className="text-gray-500">Abschlussjahr: 2025</p>
        </div>
      </div>

      {/* Studiengang Abschnitt */}
      <div className="graduation-section">
        <h3 className="text-lg">Studiengang</h3>
        <p>Medieninformatik und Interaktives Entertainment (B.Sc.)</p>
        <p>Abschlussnote: 1,4</p>
      </div>

      {/* Bachelorarbeit Abschnitt */}
      <div className="graduation-section">
        <h3 className="text-lg">Bachelorarbeit</h3>
        <p>
          Titel: „Prozessoptimierung im Unternehmenskontext am Beispiel der
          Integration von Microsoft Office 365 in timePlus“
        </p>
        <p>Note: 1,1</p>
      </div>
    </div>
  );
};

export default Graduation;
