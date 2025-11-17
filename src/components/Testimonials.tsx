import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "./ui/button";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Marie Laurent",
      role: "CEO, Tech Startup",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      content:
        "Alex est un développeur exceptionnel. Son expertise technique et sa capacité à comprendre nos besoins ont été déterminantes pour le succès de notre projet. Je recommande vivement!",
      rating: 5,
    },
    {
      name: "Thomas Moreau",
      role: "Product Manager, DigitalCorp",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      content:
        "Collaboration exceptionnelle! Alex a livré un travail de qualité supérieure dans les délais impartis. Son professionnalisme et sa créativité ont dépassé nos attentes.",
      rating: 5,
    },
    {
      name: "Sophie Dubois",
      role: "CTO, E-Commerce Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      content:
        "Un développeur talentueux avec une excellente maîtrise des technologies modernes. Alex a transformé notre vision en réalité avec une application performante et élégante.",
      rating: 5,
    },
    {
      name: "Lucas Bernard",
      role: "Founder, StartupLab",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
      content:
        "Travailler avec Alex a été un véritable plaisir. Sa rigueur, son sens du détail et sa réactivité font de lui un partenaire de confiance pour tout projet web.",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Ce que disent mes{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Retours d'expérience de clients et partenaires avec qui j'ai collaboré
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4" />
        </motion.div>

        {/* Main testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-blue-500/20">
              <Quote className="h-16 w-16" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-slate-300 text-lg md:text-xl text-center mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author info */}
                <div className="flex items-center justify-center gap-4">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500/50"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="text-left">
                    <h4 className="text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-slate-600 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>
        </motion.div>

        {/* All testimonials grid (small preview) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-slate-800/30 border rounded-lg p-4 text-left transition-all duration-300 ${
                index === currentIndex
                  ? "border-blue-500 bg-slate-800/50"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs truncate">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-400 text-xs line-clamp-2">
                {testimonial.content}
              </p>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
