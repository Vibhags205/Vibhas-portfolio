export default function ProjectCard({
  title,
  description,
  repo,
  link,
  image,
}) {
  return (
    <div className="group relative h-[320px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>

        <p className="text-sm text-gray-200 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex gap-4 text-sm font-medium">
          {repo && (
            <a
              href={repo}
              target="_blank"
              className="hover:underline text-teal-300"
            >
              GitHub
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              className="hover:underline text-orange-300"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
