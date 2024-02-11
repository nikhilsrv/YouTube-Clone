import React, { useContext, useEffect } from "react";
import { Context } from "../Context/Contextapi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults,dark } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className={`${dark?"dark":""}`}>
      <div className="flex flex-row bg-white dark:bg-black h-[calc(100%-56px)]">
        <LeftNav />
        <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto  bg-white dark:bg-black">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {!loading &&
              searchResults?.map((item) => {
                if (item?.type !== "video") return false;
                return (
                  <VideoCard key={item?.video?.videoId} video={item?.video} />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
