import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";

import { projects, projectsInProduction } from "@/api/projects";
import { ProjectActionCard } from "@/components/my/projects/index/ProjectActionCard";
import { newMessage } from "@/utils/chat-utils";

dayjs.extend(localizedFormat);

export const chatState = {
  messages: [
    newMessage("Hi Julia, how can I help you today?", true),
    newMessage(
      "I was just wondering when all the bulk production items can be shipped out by?",
      false
    ),
    newMessage(
      "Sure! See below a summary of estimated production completion dates for items in bulk production now:",
      true,
      <div className="rounded-md border border-gray-200 bg-white p-2 px-4 text-sm shadow-md">
        {projectsInProduction.slice(0, 3).map((project) => (
          <div key={project.id} className="flex justify-between space-x-8">
            <div className="font-medium underline">
              <Link href={`/my/projects/${project.id}`}>{project.name}</Link>
            </div>
            <div>{dayjs(project.createdAt).add(14, "day").format("L")}</div>
          </div>
        ))}
      </div>
    ),
    newMessage(
      "Do you also have tracking for the production that's been shipped?",
      false
    ),
    newMessage(
      "Of course! See below a summary of tracking numbers and estimated delivery dates for the items shipped:",
      true,
      <div className="rounded-md border border-gray-200 bg-white p-2 px-4 text-sm shadow-md">
        {projectsInProduction.slice(3).map((project) => (
          <div key={project.id} className="flex justify-between space-x-8">
            <div className="font-medium underline">
              <Link href={`/my/projects/${project.id}`}>{project.name}</Link>
            </div>
            <div>{dayjs(project.createdAt).add(14, "day").format("L")}</div>
          </div>
        ))}
      </div>
    ),
    newMessage(
      "Great! And how are we doing on adjusting the phone stand samples?",
      false
    ),
    newMessage(
      `The factory is currently working on the adjustments. Last time you mentioned to change the print pattern, so they are resampling that right now. We are on track to finish by ${dayjs()
        .add(7, "day")
        .format("L")}, and will notify you with new sample photos then!`,
      true
    ),
    newMessage(
      "Cool. Oh also let's start sampling for the cat plushie, I just got approval.",
      false
    ),
    newMessage(
      "That's great to hear! You can pay the sample invoice here whenever you're ready, and we will start sampling right away!",
      true,
      <ProjectActionCard project={projects["5"]!} />
    ),
  ],
};
