import "./events.scss";
import SearchBar from "@/app/components/Searchbar/SearchBar";
import {
  PlusIcon,
  EllipsisVerticalIcon,
  Square2StackIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Events() {
  return (
    <main>
      <h3 className="section-header text-lg mb-6">All Events</h3>
      <div className="flex justify-between items-center mb-6">
        <SearchBar />
        <button className=" bg-blue-600 rounded-lg text-white px-4 h-10 shadow-md">
          <PlusIcon className="w-6 h-6 text-wh mr-2 inline-block" />
          <span>Create</span>
        </button>
      </div>
      <div className="events flex flex-wrap gap-4">
        <div className="event bg-white rounded-lg  w-1/3 p-4 shadow-md flex flex-col">
          <div className="flex justify-between mb-10">
            <div className="flex gap-4">
              <div className="event-color bg-fuchsia-500 rounded-full w-5 h-5"></div>
              <div className="event-details flex flex-col">
                <div className="event-title">Frontend Interview</div>
                <div className="event-time text-xs text-slate-500 mb-6">
                  30 min. 15 min. break
                </div>
                <Link href="" className="text-blue-600 text-sm font-medium">
                  View booking page
                </Link>
              </div>
            </div>
            <div>
              <EllipsisVerticalIcon className="w-6 h-6" />
            </div>
          </div>
          <div className="flex justify-between">
            <button>
              <Square2StackIcon className="w-6 h-6 text-blue-600 inline-block mr-2" />
              <span className="text-blue-600 text-sm">Copy URL</span>
            </button>
            <button>
              <ShareIcon className="w-6 h-6 text-blue-600 inline-block mr-2" />
              <span className="text-blue-600 text-sm">Share</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
