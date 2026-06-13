import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "~/types";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Reveal } from "~/components/shared/reveal";
import { cn } from "~/lib/utils";

interface FAQSectionProps {
  items: FAQItem[];
}

export function FAQSection({ items }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32 section-muted" aria-labelledby="faq-heading">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Pertanyaan Umum"
            description="Hal-hal yang sering ditanyakan calon anggota baru."
            align="center"
          />
        </Reveal>

        <div className="space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  aria-expanded={openId === item.id}
                >
                  <span className="font-display font-semibold pr-4">{item.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-zinc-400 transition-transform",
                      openId === item.id && "rotate-180",
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-5 text-muted-foreground">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
