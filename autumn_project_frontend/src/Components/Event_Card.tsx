import React from 'react';

interface EventCardProps {
  eventName: string;
  eventAdmin: string;
  linkForMoreDetails: string;
  eventDescription: string;
  eventDeadline: string;
}

const EventCard: React.FC<EventCardProps> = ({ eventName, eventAdmin, eventDescription, eventDeadline, linkForMoreDetails }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md mb-4 p-4 m-2 w-1/2">
      <div className="flex justify-between items-start">
        <div className="flex flex-col m-1">
          <h2 className="text-lg font-semibold mb-1">{eventName}</h2>
          <p className="text-sm text-gray-600">Added by {eventAdmin}</p>
        </div>
        <div className="flex flex-col m-1 text-right">
          <p className="text-sm text-gray-600 mb-1">Event Deadline: {eventDeadline}</p>
          <a href={linkForMoreDetails} className="text-blue-500 hover:underline">
            Link For More Details
          </a>
        </div>
      </div>
      <div className="mt-3 text-gray-700">
        {eventDescription}
      </div>
    </div>
  );
};

export default EventCard;