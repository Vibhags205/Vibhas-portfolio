import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await addDoc(collection(db, "contacts"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: Timestamp.now(),
      });

      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
    } catch (err) {
      console.error("Firebase error:", err);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-14 text-teal-700 text-center">
        Contact Me
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">

        {/* LEFT SIDE – CONTACT INFO */}
        <div className="space-y-6">

          <FloatingCard>
            <h2 className="text-2xl font-semibold mb-1">VIBHA GS</h2>
            <p className="text-gray-600">
              Feel free to reach out — I’d love to connect ✨
            </p>
          </FloatingCard>

          <FloatingCard>
            <p className="font-medium mb-1">📧 Email</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              gsvibha26@gmail.com <br />
              vibhag799@gmail.com <br />
              1MJ23CS199@mvjce.edu.in
            </p>
          </FloatingCard>

          <FloatingCard>
            <p className="font-medium mb-1">🔗 LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/vibha-gs-3a2a81340"
              target="_blank"
              className="text-teal-600 hover:underline break-all"
            >
              linkedin.com/in/vibha-gs-3a2a81340
            </a>
          </FloatingCard>

        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <FloatingCard>
          <h2 className="text-xl font-semibold mb-6">
            Send me a message 💬
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <FloatingInput
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
            />

            <FloatingInput
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition hover:-translate-y-1 hover:shadow-lg"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-white font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition"
            >
              {loading ? "Sending..." : "Send Message 🚀"}
            </button>

            {success && (
              <p className="text-green-600 text-center font-medium">
                Message sent successfully! ✅
              </p>
            )}

          </form>
        </FloatingCard>

      </div>
    </section>
  );
}

/* ---------- REUSABLE FLOATING COMPONENTS ---------- */

function FloatingCard({ children }) {
  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300">
      {children}
    </div>
  );
}

function FloatingInput({ name, type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-400 transition hover:-translate-y-1 hover:shadow-lg"
    />
  );
}
