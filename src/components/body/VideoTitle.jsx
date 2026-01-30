import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({ title, description }) => {
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  return (
    <div className="p-2 m-10 mt-50 absolute z-50 w-70  bg-gradient-to-r from-black rounded-md">
      <h1 className="font-bold text-4xl text-yellow-600">{title}</h1>
      <p
        className={`${"font-semibold text-md w-1/4 text-white w-full"} ${
          descriptionExpand ? "" : "line-clamp-3"
        }`}
      >
        {description}
      </p>
      <button
        className="cursor-pointer text-gray-400 font-semibold"
        onClick={() => setDescriptionExpand(!descriptionExpand)}
      >
        {descriptionExpand ? "less..." : "more..."}
      </button>
      <div className="flex mt-2">
        <button className="flex items-center gap-2 cursor-pointer py-2 px-6 rounded-md m-2 bg-white hover:bg-white/60">
          <FaPlay />
          <span className="text-md font-semibold">Play</span>
        </button>
        <button className="flex items-center gap-2 cursor-pointer p-2 rounded-md m-2 bg-gray-500/50 text-white hover:bg-gray-500/80 duration-300 ">
          <MdInfoOutline size={20} />
          <span className="text-md font-semibold">More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
