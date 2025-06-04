export default function Skills() {
  const skills = [
    "Python",
    "Go",
    "TypeScript",
    "Node.js",
    "React",
    "Tailwind",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS"
  ];

  return (
    <section className="max-w-4xl mx-auto pt-4 pb-8">
      <h2 className="text-2xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition-all duration-200 hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 