import { contentService } from "~/services/content";
import { SEOHead } from "~/components/shared/seo-head";
import { Container } from "~/components/ui/container";
import { SectionHeading } from "~/components/ui/section-heading";
import { MemberCard } from "~/components/cards/member-card";
import { Reveal } from "~/components/shared/reveal";
import type { Route } from "./+types/route";

export async function loader() {
  return {
    core: contentService.members.byType("core"),
    active: contentService.members.byType("active"),
    alumni: contentService.members.byType("alumni"),
  };
}

export function meta() {
  return [
    { title: "Anggota" },
    { name: "description", content: "Tim core, anggota aktif, dan alumni Divisi Web Design WD-MCC." },
  ];
}

export default function MembersPage({ loaderData }: Route.ComponentProps) {
  const { core, active, alumni } = loaderData;

  return (
    <>
      <SEOHead
        title="Anggota"
        description="Tim core, anggota aktif, dan alumni Divisi Web Design WD-MCC."
        path="/members"
      />

      <section className="pt-32 pb-16">
        <Container>
          <Reveal>
            <SectionHeading
              label="Tim"
              title="Members"
              description="Orang-orang di balik divisi — dari pembina hingga alumni yang inspiratif."
            />
          </Reveal>
        </Container>
      </section>

      {[
        { title: "Core Team", members: core },
        { title: "Anggota Aktif", members: active },
        { title: "Alumni", members: alumni },
      ].map((group) => (
        <section key={group.title} className="pb-24">
          <Container>
            <Reveal>
              <h2 className="mb-8 font-display text-2xl font-bold">{group.title}</h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.members.map((member, i) => (
                <Reveal key={member.id} delay={i * 0.06}>
                  <MemberCard member={member} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
