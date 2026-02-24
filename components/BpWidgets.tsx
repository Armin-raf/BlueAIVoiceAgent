import { useState } from "react";

export default function BpWidgets() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Buttons */}
      <div style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        display: "flex",
        gap: "12px",
        zIndex: 9999
      }}>
        {/* Chat Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "none",
            background: "#2563eb",
            color: "white",
            cursor: "pointer"
          }}
        >
          💬
        </button>

        {/* Voice Button */}
        <button
          onClick={() =>
            window.open(
              "https://hypobranchial-inez-nonmonogamous.ngrok-free.dev/webhook-test/c6e462b3-86c6-4812-a58c-bfd8fe4ef882",
              "_blank"
            )
          }
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "none",
            background: "#10b981",
            color: "white",
            cursor: "pointer"
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
            bottom: "95px",
            width: "400px",
            height: "600px",
            background: "#0b0f1a",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
            zIndex: 9999
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
