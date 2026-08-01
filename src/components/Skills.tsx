export default function Skills() {
  const skills = [
    "Python",
    "Go",
    "C#",
    "Java",
    "Node.js",
    "PostgreSQL",
    "Redis"
,   "Docker",
    "Kubernetes",
    "Azure"
  ];

  return (
    <section className="pt-4 pb-6">
      <h2 className="text-[18px] leading-[28px] font-[500] text-[rgb(245,245,245)] mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 sm:px-2.5 py-0.5 bg-[#734f96]/35 hover:bg-[#734f96]/50 rounded-md text-[13px] leading-[20px] font-[500] text-[#e8dff5] transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
} 