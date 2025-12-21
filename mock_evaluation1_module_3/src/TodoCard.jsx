import React from "react";

export default function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 8, margin: "8px 0", borderRadius: 6 }}>
      <div style={{ fontWeight: 600 }}>{title}</div>
      <div style={{ fontSize: 12, color: "#555" }}>User: {userId} — Completed: {completed ? "Yes" : "No"}</div>
    </div>
  );
}
