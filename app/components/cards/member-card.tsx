import type { Member } from "~/types";
import { Badge } from "~/components/ui/badge";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "~/components/shared/social-icons";

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative h-48 overflow-hidden">
        <img
          src={member.avatar}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="font-display text-lg font-semibold">{member.name}</h3>
          <p className="text-sm text-white/80">{member.role}</p>
        </div>
      </div>
      <div className="p-5">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.bio}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {member.skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
        {member.social && (
          <div className="mt-4 flex gap-2">
            {member.social.github && (
              <a href={member.social.github} className="rounded-full p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label={`GitHub ${member.name}`}>
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="rounded-full p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label={`Instagram ${member.name}`}>
                <InstagramIcon className="h-4 w-4" />
              </a>
            )}
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="rounded-full p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800" aria-label={`LinkedIn ${member.name}`}>
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
