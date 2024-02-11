import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action }) => {
    return (
        <div
            className={
                "text-black dark:text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-black/[0.1] dark:hover:bg-white/[0.15] " +
                className
            }
            onClick={action}
        >
            <span className="text-black dark:text-white text-xl mr-5">{icon}</span>
            {text}
        </div>
    );
};

export default LeftNavMenuItem;