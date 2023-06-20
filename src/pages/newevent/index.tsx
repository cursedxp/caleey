import InputField from "@/app/components/InputField/InputField";
import TextArea from "@/app/components/TextArea/TextArea";
import { CalendarIcon, InboxArrowDownIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
const CreateEvent: FC = () => {
  return (
    <main>
      <div className="event-details">
        <div className="flex justify-between items-center border-b border-b-slate-300 p-6 mb-6">
          <div>
            <div className="flex">
              <CalendarIcon className="w-6 h-6 mr-4" />
              <div className="flex flex-col">
                <span className="text-lg font-medium">Event Details</span>
                <div className=" text-sm text-slate-400">
                  Specify key information for your event
                </div>
              </div>
            </div>
          </div>
          <button className=" bg-blue-600 rounded-lg text-white px-4 h-10 shadow-md ">
            <span>Save</span>
          </button>
        </div>
        <form action="" className="flex flex-col">
          <div className="input-group flex gap-4">
            <InputField
              question="Event Title"
              description="Descriptive title for your event to help attendees understand its nature."
              label="eventTitle"
              value=""
              placeholder=""
            />
          </div>
          <div className="input-group flex gap-4">
            <InputField
              question="Event Link"
              description="Share a unique link for your event to facilitate easy access and participation"
              label="eventLink"
              value=""
              placeholder=""
            />
          </div>
          <TextArea
            question="Description"
            description="Provide a detailed description of your event to inform attendees about its purpose, agenda, and key details."
            label="description"
            value=""
            placeholder=""
          ></TextArea>
        </form>
      </div>
    </main>
  );
};

export default CreateEvent;
