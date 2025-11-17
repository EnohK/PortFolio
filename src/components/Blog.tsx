import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const articles = [
    {
      title: "Les meilleures pratiques React en 2024",
      excerpt:
        "Découvrez les patterns et techniques essentiels pour développer des applications React modernes et performantes.",
      date: "15 Nov 2024",
      readTime: "5 min",
      category: "React",
      image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYzMzA1ODc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "TypeScript: Guide complet pour débutants",
      excerpt:
        "Un guide pratique pour maîtriser TypeScript et améliorer la qualité de votre code JavaScript.",
      date: "08 Nov 2024",
      readTime: "8 min",
      category: "TypeScript",
      image: "https://images.unsplash.com/photo-1759322945173-76b604965b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cCUyMG1vZGVybnxlbnwxfHx8fDE3NjMzOTY3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Architecture microservices avec Node.js",
      excerpt:
        "Comment concevoir et implémenter une architecture microservices scalable avec Node.js.",
      date: "01 Nov 2024",
      readTime: "10 min",
      category: "Backend",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMjg0Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="blog" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-20 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
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
            Mon{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Articles et tutoriels sur le développement web et les technologies modernes
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white border-0">
                    {article.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta info */}
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>

                {/* Read more link */}
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                  whileHover={{ x: 5 }}
                >
                  <span>Lire la suite</span>
                  <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.a>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl -z-10"
              />
            </motion.article>
          ))}
        </div>

        {/* View all button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10"
          >
            Voir tous les articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 border-2 border-purple-500/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
}
