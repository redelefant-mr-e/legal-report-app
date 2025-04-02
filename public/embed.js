// Vereinfachte Frontend-Logik für Markdown-Eingabe & Button
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generateReport");
  const input = document.getElementById("inputText");
  const notes = document.getElementById("notes");
  const output = document.getElementById("report");

  btn.onclick = async () => {
    const res = await fetch("/api/generateReport", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        inputText: input.value,
        notes: notes.value,
      }),
    });
    const data = await res.json();
    output.textContent = data.report || "Fehler beim Generieren.";
  };
});
