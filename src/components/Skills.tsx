import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, Layout, Server, Smartphone, Cloud } from "lucide-react";
import { Progress } from "./ui/progress";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      icon: Layout,
      title: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Vue.js", level: 85 },
      ],
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js / Express", level: 88 },
        { name: "Python / Django", level: 82 },
        { name: "GraphQL", level: 80 },
        { name: "REST APIs", level: 93 },
      ],
    },
    {
      icon: Database,
      title: "Database",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 78 },
        { name: "Firebase", level: 83 },
      ],
    },
    {
      icon: Cloud,
      title: "DevOps & Cloud",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 80 },
        { name: "CI/CD", level: 82 },
        { name: "Kubernetes", level: 75 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "React Native", level: 88 },
        { name: "Flutter", level: 75 },
        { name: "PWA", level: 90 },
        { name: "Responsive Design", level: 95 },
      ],
    },
    {
      icon: Code2,
      title: "Outils & Autres",
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git / GitHub", level: 93 },
        { name: "Figma", level: 85 },
        { name: "Jest / Testing", level: 87 },
        { name: "Agile / Scrum", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Compétences
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions innovantes
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                {/* Icon header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-white">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 text-sm">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                          }}
                          className="text-blue-400 text-sm"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3,
                            ease: "easeOut",
                          }}
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${category.color} rounded-full`}
                        >
                          {/* Animated shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ["-100%", "100%"],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                            }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className={`absolute inset-0 bg-gradient-to-br ${category.color} blur-2xl -z-10 rounded-xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional tech icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-white text-center mb-8">Technologies utilisées</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Tailwind",
              "Next.js",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Git",
              "Figma",
              "GraphQL",
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 1 + index * 0.05,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                }}
                className="px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300 cursor-pointer"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-blue-500/20 rounded-lg"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-16 h-16 border-2 border-purple-500/20 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </section>
  );
}
