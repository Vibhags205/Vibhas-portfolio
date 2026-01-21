import ProjectCard from "../components/ProjectCard";

// ✅ Image imports (make sure these files exist)
import swaralayaImg from "../assets/projects/swaralaya.png";
import floraImg from "../assets/projects/flora-guard.png";
import productivityImg from "../assets/projects/productivity.png";
import labImg from "../assets/projects/lab-uniform.png";
import tennisImg from "../assets/projects/tennis-game.png";

export default function Projects() {
  return (
    <section className="px-10 py-20 max-w-6xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-12 text-teal-700">
        My Projects
      </h1>

      {/* Grid wrapper is IMPORTANT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        <ProjectCard
          title="Swaralaya – A Space for Music Learners and Lovers"
          description="A web application for Indian classical music lovers, offering learning resources, guidance, and updates on events."
          repo="https://github.com/Vibhags205/swaralaya"
          link="https://swaralaya-front.onrender.com/"
          image={swaralayaImg}
        />

        <ProjectCard
          title="Flora Guard AI"
          description="A smart plant care assistant using AI-powered disease detection to monitor plant health and provide guidance."
          repo="https://github.com/Vibhags205/flora-guard-ai"
          link="https://flora-guard-ai.vercel.app/"
          image={floraImg}
        />

        <ProjectCard
          title="Productivity Dashboard"
          description="A productivity dashboard with to-do list, habit trackers, weather widgets, quotes, and notes."
          repo="https://github.com/Vibhags205/productivity-dashboard"
          link="https://productivity-dashboaghf-133b536rs-vibha-gss-projects.vercel.app/"
          image={productivityImg}
        />

        <ProjectCard
          title="Lab Uniform Detecting System"
          description="Python + OpenCV project using YOLOv8 to detect lab uniform compliance."
          repo="https://github.com/Vibhags205/Labuniformdetect"
          image={labImg}
        />

        <ProjectCard
          title="Tennis Game (Canvas)"
          description="A simple tennis game built using HTML Canvas."
          repo="https://github.com/Vibhags205/tennis-game"
          link="https://tennis-game-drab.vercel.app/"
          image={tennisImg}
        />

      </div>
    </section>
  );
}
