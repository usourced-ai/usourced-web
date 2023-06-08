import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { decode } from "he";
import Link from "next/link";
import { Fragment } from "react";
import { FaLinkedin } from "react-icons/fa";

import type { MemberProfile } from "@/api/founding_team";
import { Avatar } from "@/components/common/Avatar";

export function TeamMemberProfileSlideout({
  member,
  memberImageUrl,
  open,
  setOpen,
}: {
  member: MemberProfile;
  memberImageUrl: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-fast"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-fast"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-fast"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-fast"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                  <div
                    className="flex h-full flex-col overflow-y-scroll bg-cream bg-cover bg-bottom bg-no-repeat py-6 shadow-xl"
                    style={{
                      backgroundImage: "url(/images/index/bg/about-bg.svg)",
                    }}
                  >
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Biography
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-12 flex-1 px-4 text-center sm:px-6">
                      <Avatar
                        user={{ name: member.name, avatarUrl: memberImageUrl }}
                        size={40}
                        className="mx-auto"
                      />
                      <h2 className="mt-4 font-brand text-3xl">
                        {member.name}
                      </h2>
                      <p className="text-gray-500">{member.title}</p>
                      {member.bio && (
                        <div className="mt-8 px-4">
                          <p className="border-t border-gray-300 pt-4 text-left">
                            {decode(member.bio)}
                          </p>
                        </div>
                      )}
                      {member.linkedin_url && (
                        <Link href={member.linkedin_url}>
                          <FaLinkedin size={24} className="mx-auto mt-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
