export default function Hero({ setPage }) {
  return (
    <section className="flex items-center justify-center px-6 py-28">
      <div className="max-w-3xl text-center bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-xl">
        
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          <span className="text-gray-900">VIBHA G S</span>
        </h1>

        {/* Highlight line */}
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>

        {/* Subtitle */}
        <p className="text-teal-600 font-semibold text-lg mb-4">
          CSE Student | Full Stack Developer
        </p>

        {/* About */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          I’m a CSE student passionate about full-stack development.
          I’m interested in exploring concepts like Machine Learning and
          Generative AI, and I enjoy building clean, real-world applications.
        </p>

        {/* Action buttons */}
        <div className="flex justify-center gap-6 flex-wrap">
          <CircleButton
            color="bg-orange-400"
            text="Projects"
            onClick={() => setPage("projects")}
          />
          <CircleButton
            color="bg-cyan-400"
            text="Contact"
            onClick={() => setPage("contact")}
          />
        </div>
      </div>
    </section>
  );
}

function CircleButton({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-28 h-28 rounded-full ${color} text-gray-900 flex items-center justify-center font-semibold shadow-lg hover:scale-110 hover:shadow-2xl transition`}
    >
      {text}
    </button>
  );
}
