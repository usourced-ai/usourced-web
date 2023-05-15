import { useState } from "react";

import { FOUNDING_TEAM_MEMBERS, type MemberProfile } from "@/api/founding_team";
import TeamMemberProfileSlideout from "@/components/index/TeamMemberProfileSlideout";
import { useFirestoreImage } from "@/utils/firebase";

const DEFAULT_PROFILE_IMAGE_URL = "/home/silhouette.png";

function TeamMemberCard({ member }: { member: MemberProfile }) {
  const { image } = useFirestoreImage({
    path: `/usourced/team/${member.name.split(" ")[0]}.jpg`,
  });
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="text-center"
        onClick={() => setOpen(true)}
      >
        <img
          src={image ?? DEFAULT_PROFILE_IMAGE_URL}
          alt={member.name}
          className="mx-auto h-40 w-40 rounded-full"
        />
        <h5 className="mt-2">{member.name}</h5>
        <p className="text-sm text-gray-500">{member.title}</p>
      </button>
      <TeamMemberProfileSlideout
        member={member}
        memberImageUrl={image ?? DEFAULT_PROFILE_IMAGE_URL}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

export function FoundingTeamSection() {
  return (
    <section
      className="__scrollreveal bg-no-repeat"
      style={{
        backgroundImage:
          "url(/images/index/bg/green-1.svg), url(/images/index/bg/green-2.svg)",
        backgroundPosition: "bottom 200px left 0px, top 100px right 0px",
        backgroundSize: "20vw",
      }}
    >
      <div className="mx-auto max-w-screen-lg text-center text-brand sm:px-6 lg:px-8">
        <h1 className="font-brand text-4xl md:text-5xl">Meet the Team</h1>
        <div className="mx-4 mt-8 grid grid-cols-2 gap-2 md:grid-cols-4">
          {FOUNDING_TEAM_MEMBERS.map((member) => (
            <TeamMemberCard member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
