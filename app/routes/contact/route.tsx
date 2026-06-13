import { Link } from "react-router";
import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { Reveal } from "~/components/shared/reveal";
import { FAQSection } from "~/components/sections/faq-section";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { GithubIcon, InstagramIcon, YoutubeIcon } from "~/components/shared/social-icons";
import { siteConfig } from "~/content/site";
import type { Route } from "./+types/route";

export async function loader() {
  return { faq: contentService.shared.faq().slice(0, 3) };
}

export function meta() {
  return [
    { title: "Kontak" },
    { name: "description", content: "Hubungi Divisi Web Design WD-MCC — alamat, email, dan media sosial." },
  ];
}

export default function ContactPage({ loaderData }: Route.ComponentProps) {
  const { faq } = loaderData;

  return (
    <>
      <SEOHead
        title="Kontak"
        description="Hubungi Divisi Web Design WD-MCC — alamat, email, dan media sosial."
        path="/contact"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Hubungi Kami"
              title="Contact"
              description="Punya pertanyaan tentang divisi? Ingin gabung atau kolaborasi? Hubungi kami."
            />
          </Reveal>
        </Container>
      </section>

      <section className="pb-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <h2 className="font-display text-xl font-bold">Informasi Kontak</h2>
                <ul className="mt-6 space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{siteConfig.address}</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm text-primary hover:underline">
                        {siteConfig.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-sm text-primary hover:underline">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </li>
                </ul>

                <h3 className="mt-8 font-display font-semibold">Media Sosial</h3>
                <div className="mt-4 flex gap-3">
                  {[
                    { href: siteConfig.social.instagram, icon: InstagramIcon, label: "Instagram" },
                    { href: siteConfig.social.github, icon: GithubIcon, label: "GitHub" },
                    { href: siteConfig.social.youtube, icon: YoutubeIcon, label: "YouTube" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-zinc-200 p-3 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
                <iframe
                  title="Lokasi SMK Negeri 1 Kedawung Cirebon"
                  src="https://maps.google.com/maps?q=SMK+Negeri+1+Kedawung+Cirebon&output=embed"
                  className="h-80 w-full lg:h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display font-semibold">Punya pertanyaan lain?</h2>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Lihat FAQ lengkap di halaman beranda.</p>
                </div>
                <Link
                  to="/#faq"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Lihat FAQ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <FAQSection items={faq} />
    </>
  );
}
