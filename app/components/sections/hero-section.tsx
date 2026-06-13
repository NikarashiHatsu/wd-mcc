import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HERO_WORDS } from "~/lib/constants";
import { siteConfig } from "~/content/site";
import { Button } from "~/components/ui/button";
import { Container } from "~/components/ui/container";
import { useReducedMotion } from "~/hooks/useReducedMotion";

gsap.registerPlugin(useGSAP);

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const bgRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % HERO_WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  useGSAP(
    () => {
      if (reducedMotion || !bgRef.current) return;
      gsap.to(bgRef.current, {
        backgroundPosition: "200% 200%",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: bgRef, dependencies: [reducedMotion] },
  );

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div
        ref={bgRef}
        className="noise-bg absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-400/5"
        style={{ backgroundSize: "200% 200%" }}
        aria-hidden="true"
      />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -left-32 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.p
              className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {siteConfig.institution}
            </motion.p>

            <motion.h1
              className="font-display text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              We{" "}
              <span className="relative inline-block">
                <motion.span
                  key={wordIndex}
                  className="gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {HERO_WORDS[wordIndex]}
                </motion.span>
              </span>
              <br />
              the Web
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Divisi Web Design Multimedia Creative Club — tempat siswa SMK belajar
              desain, coding, dan membangun karya digital yang nyata.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/works">
                <Button size="lg">
                  Explore Works <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/join">
                <Button variant="outline" size="lg">
                  Join Division
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-4 rotate-6 rounded-3xl bg-gradient-to-br from-primary/20 to-amber-400/20" />
              <div className="absolute inset-0 -rotate-3 rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-2xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">Stats</p>
                    <p className="mt-2 font-display text-4xl font-bold">50+</p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Anggota Aktif</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
                      <p className="font-display text-2xl font-bold text-primary">30+</p>
                      <p className="text-xs text-zinc-500">Projects</p>
                    </div>
                    <div className="rounded-xl bg-zinc-100 p-4 dark:bg-zinc-800">
                      <p className="font-display text-2xl font-bold text-amber-500">8</p>
                      <p className="text-xs text-zinc-500">Tahun</p>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Est. 2018 · SMK N 1 Kedawung Cirebon
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
