import { Link } from "react-router";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, InstagramIcon, YoutubeIcon } from "~/components/shared/social-icons";
import { Container } from "~/components/ui/container";
import { siteConfig } from "~/content/site";
import { NAV_LINKS } from "~/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold">
              <span className="gradient-text">WD-MCC</span>
            </Link>
            <p className="mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.social.instagram}
                className="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.github}
                className="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                className="rounded-full p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold">Navigasi</h3>
            <ul className="mt-4 space-y-2" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-primary dark:text-zinc-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400" role="list">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.address}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} {siteConfig.shortName} — {siteConfig.institution}
          </p>
        </div>
      </Container>
    </footer>
  );
}
