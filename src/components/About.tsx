import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code, Rocket, Heart, Award } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const timeline = [
    { year: "2023", title: "Lead Developer", company: "Tech Innovators" },
    { year: "2021", title: "Full Stack Developer", company: "Digital Solutions" },
    { year: "2019", title: "Junior Developer", company: "StartUp Lab" },
    { year: "2018", title: "Diplôme d'Ingénieur", company: "École Polytechnique" },
  ];

  const values = [
    {
      icon: Code,
      title: "Code de qualité",
      description: "Des solutions robustes et maintenables",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Toujours à la pointe des technologies",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Amour du code et de la création",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Engagement envers la perfection",
      color: "from-yellow-500 to-green-500",
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            À propos de{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              moi
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-white">Mon parcours</h3>
            <p className="text-slate-300 leading-relaxed">
              Développeur passionné avec plus de 5 ans d'expérience dans la
              création d'applications web modernes et performantes. J'ai eu la
              chance de travailler sur des projets variés, allant des startups
              innovantes aux grandes entreprises.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Ma philosophie est simple : créer des solutions élégantes qui
              résolvent de vrais problèmes. Je crois fermement en l'importance
              de l'expérience utilisateur et de la qualité du code.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Actuellement, je me spécialise dans React, Node.js et les
              architectures cloud modernes. Je suis toujours en quête
              d'apprentissage et de nouveaux défis.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-white mb-8">Timeline</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-2 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900"
                    whileHover={{ scale: 1.5 }}
                  />
                  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors duration-300">
                    <span className="text-blue-400">{item.year}</span>
                    <h4 className="text-white mt-1">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-white text-center mb-12">Mes valeurs</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="relative group"
              >
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br ${value.color} p-0.5 mb-4`}
                  >
                    <div className="w-full h-full bg-slate-900 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h4 className="text-white mb-2">{value.title}</h4>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </div>
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 rounded-xl -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="rgb(15, 23, 42)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
}
