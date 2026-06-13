import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "~/components/ui/container";
import { Button } from "~/components/ui/button";
import { Reveal } from "~/components/shared/reveal";

export function CTASection() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div className="absolute inset-0 noise-bg opacity-20" aria-hidden="true" />
            <div className="relative">
              <h2 id="cta-heading" className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">
                Siap Mulai Perjalanan Digital-mu?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
                Gabung divisi Web Design — belajar desain, coding, dan bangun portofolio nyata
                bersama komunitas yang supportif.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/join">
                  <Button variant="secondary" size="lg">
                    Daftar Sekarang <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
