import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import rottem_tomato from "@/assets/rottem_tomato.png";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "ROTTEM ",
      description:
        "ROTTEM est une application web innovante que j’ai conçue pour permettre aux utilisateurs de noter, commenter et découvrir des films de manière simple, intuitive et visuellement agréable.",
      image: rottem_tomato,
      technologies: ["Next Js", "MongoDB", "Tailwind", "TypeScript"],
      demoUrl: "https://test-brox.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Show Time",
      description:
        "Show Time est une application web moderne conçue pour faciliter la découverte d’événements et la réservation de tickets en quelques clics. Elle offre une expérience fluide, sécurisée et accessible, permettant aux utilisateurs d’acheter leurs billets pour des concerts, festivals, conférences, soirées et autres événements directement en ligne.",
      image:
        "https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vZGVybnxlbnwxfHx8fDE3NjMzOTY3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Full Nest Js ", "MongoDB", "Tailwind", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Trello App Mobile",
      description:
        "Trello App Mobile est une application mobile que j’ai développée pour offrir une solution simple, flexible et puissante de gestion de tâches, inspirée du fonctionnement de Trello. Elle permet aux utilisateurs d’organiser leurs projets, suivre l’avancement des activités et collaborer efficacement depuis leur smartphone.",
      image:
        "https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vZGVybnxlbnwxfHx8fDE3NjMzOTY3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React Native ", "Trello API", "Tailwind", "TypeScript"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "YOWL",
      description:
        "YOWL est une application web innovante que j’ai développée pour centraliser et gérer en un seul endroit les commentaires provenant de différentes plateformes (réseaux sociaux, sites web, marketplaces, YouTube, blogs…).",
      image:
        "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYzMzA1ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["API Laravel", "Vue.js", "MySQL", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Free ADS",
      description:
        "Free ADS est une application web de type marketplace que j’ai développée pour permettre aux utilisateurs de publier, gérer et consulter des annonces en ligne en toute simplicité. La plateforme offre une expérience fluide, un design moderne et des fonctionnalités puissantes pour connecter vendeurs et acheteurs rapidement.",
      image:
        "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYzMzA1ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Laravel", "MySQL", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Post It",
      description:
        "Dashboard d'analyse pour réseaux sociaux avec graphiques interactifs et rapports automatisés.",
      image:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzMzg1MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Vue.js", "Externe API", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Integration",
      description:
        "Assistant conversationnel alimenté par IA avec interface moderne et support multilingue.",
      image:
        "https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vZGVybnxlbnwxfHx8fDE3NjMzOTY3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["HTML", "CSS", "PHP", "MySQL"],
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "TWP",
      description:
        "Générateur de portfolio automatique avec templates personnalisables et export en PDF.",
      image:
        "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjg0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Vue.js", "Trello API", "Tailwind"],
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-slate-950 overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
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
              Projets
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et innovants
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Card container with 3D effect */}
              <motion.div
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 h-full"
              >
                {/* Image container */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.demoUrl}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                    >
                      <Play className="h-5 w-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white mb-3">{project.title}</h3>
                  <p className="line-clamp-5 overflow-hidden text-slate-400 mb-4 text-sm leading-relaxed ">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-slate-700 text-slate-400 hover:bg-slate-800"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>

                {/* Neon glow on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === index ? 0.3 : 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl -z-10"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more button */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
          >
            Voir tous les projets
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
