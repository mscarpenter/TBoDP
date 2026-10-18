import React, { useEffect, useRef } from "react";
import { useClock } from "./useClock";
import { useLocalStorage } from "./useLocalStorage";

export default function WelcomeBanner() {
  const currentTime = useClock();

  // Persistência no localStorage
  const [lastVisit, setLastVisit] = useLocalStorage("tbodp_last_visit", null);

  const displayedLastVisit = useRef(lastVisit);

  useEffect(() => {
      const newTime = new Date().toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    setLastVisit(newTime);
  }, []); 

  return (
    <div style={bannerStyle}>
      <p style={{ margin: "4px 0" }}>
          <strong>Horário atual:</strong> {currentTime.toLocaleTimeString("pt-BR")}
      </p>

      {displayedLastVisit.current ? (
        <p style={{ margin: "4px 0", color: "#2563eb" }}>Você entrou pela última vez às{" "}
          <code>{displayedLastVisit.current}</code>.
        </p>
      ) : (
        <p style={{ margin: "4px 0", color: "#16a34a" }}>
          Seu horário de acesso foi registrado.
        </p>
      )}
    </div>
  );
  const bannerStyle = {
  backgroundColor: "#f3f4f6",
  padding: "12px",
  borderRadius: "8px"
};

};
