import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export function ChatInput() {
  return (
    <div className="relative flex grow items-stretch">
      <input
        className="w-full rounded-none rounded-l-full border-0 py-1.5 pl-5 leading-8 text-gray-900 ring-1 ring-inset ring-gray-600 transition duration-500 placeholder:text-gray-400 focus:outline-none focus:ring-2"
        placeholder="Send a message"
      />
      <button
        type="button"
        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-full bg-gray-600 px-3 py-2 text-cream ring-1 ring-inset ring-gray-600 transition duration-500 hover:bg-gray-50 hover:text-gray-600"
      >
        <PaperAirplaneIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
