import React, { useContext, useState,useEffect } from 'react'
import { Context } from "../Context/Contextapi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";
const SearchSuggestion = () => {
    const { suggestions, } = useContext(Context);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
     useEffect(()=>{
        if (searchQuery?.length > 0) {
          navigate(`/searchResult/${searchQuery}`);
      };
     },[searchQuery])
    console.log(suggestions)
  return (
    <div className={`example ${suggestions.length>0?'z-1 h-[330px] w-[80%] border-[2px] rounded-[10px] bg-white dark:border-[black] overflow-auto bg-white dark:bg-[black]':"hidden"}`}>
       {
        suggestions.length>0?suggestions?.map((item) => {
          return(
            <div className='w-[100%] h-[50px] hover:cursor-pointer flex items-center rounded-[10px]  text-black dark:text-[white] text-[15px]' onClick={()=>(setSearchQuery(item?.video?.title))}>
              <IoIosSearch className="text-black dark:text-white text-xl mr-2 ml-2" />
            {item?.video?.title.length<=45?item?.video?.title:item?.video?.title.substr(0,45)+"..."}
            </div>
          )
        }):""
       }
    </div>
  )
}

export default SearchSuggestion
