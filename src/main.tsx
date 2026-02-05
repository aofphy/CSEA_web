import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Suppress unhandled AbortErrors which can happen during rapid navigation or strict mode re-renders
window.addEventListener("unhandledrejection", (event) => {
  if (event.reason?.name === "AbortError") {
    console.debug("Suppressing unhandled AbortError");
    event.preventDefault();
  }
});

createRoot(document.getElementById("root")!).render(<App />);
