export default function Navbar({ page, setPage }) {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      
      {/* Left: Portfolio Branding */}
      <div className="flex items-center gap-4">
        <div className="w-3 h-3 rounded-full bg-teal-500"></div>
        <div>
          <p className="text-lg font-bold tracking-wide">
            VIBHA G S
          </p>
          <p className="text-sm text-gray-500">
            Portfolio
          </p>
        </div>
      </div>

      {/* Right: Navigation */}
      <div className="flex gap-8 text-sm font-medium">
        <NavButton
          label="Home"
          active={page === "home"}
          onClick={() => setPage("home")}
        />
        <NavButton
          label="Projects"
          active={page === "projects"}
          onClick={() => setPage("projects")}
        />
        <NavButton
          label="Contact"
          active={page === "contact"}
          onClick={() => setPage("contact")}
        />
      </div>
    </nav>
  );
}

/* Reusable Nav Button */
function NavButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative pb-1 transition ${
        active
          ? "text-teal-600 font-semibold"
          : "text-gray-600 hover:text-teal-500"
      }`}
    >
      {label}

      {/* Underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full transition-all ${
          active
            ? "bg-teal-500"
            : "bg-transparent hover:bg-teal-300"
        }`}
      ></span>
    </button>
  );
}
