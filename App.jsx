import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-main text-gray-900">
      <Navbar setPage={setPage} />

      {page === "home" && <Hero setPage={setPage} />}
      {page === "projects" && <Projects />}
      {page === "contact" && <Contact />}
    </div>
  );
}
