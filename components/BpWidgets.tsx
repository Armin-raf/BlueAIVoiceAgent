import { useState } from "react";

export default function BpWidgets() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Widget Container */}
      <div
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          zIndex: 9999,
        }}
      >
        {/* 💬 Chat oben */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "none",
            background: "#2563eb",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          💬
        </button>

        {/* 📞 Voice unten */}
        <button
          onClick={() =>
            window.open(
              "https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook-test/c6e462b3-86c6-4812-a58c-bfd8fe4ef882",
              "_blank"
            )
          }
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: "none",
            background: "#10b981",
            color: "white",
            fontSize: "22px",
            cursor: "pointer",
            transition: "all 0.25s ease",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          📞
        </button>
      </div>

      {/* Chat Popup */}
      {open && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "100px",
            width: "400px",
            height: "600px",
            background: "#0b0f1a",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            zIndex: 9999,
          }}
        >
          <iframe
            src="https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      )}
    </>
  );
}
