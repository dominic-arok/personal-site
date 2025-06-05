export default function Skills() {
  const skills = [
    "Python",
    "Go",
    "TypeScript",
    "Node.js",
    "React",
    "TailwindCSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "AWS"
  ];

  return (
    <section className="max-w-4xl mx-auto pt-4 pb-8">
      <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-8">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 sm:px-3 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-[13px] leading-[20px] font-[500] text-[rgb(245,245,245)] transition-all duration-200 hover:scale-105 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 