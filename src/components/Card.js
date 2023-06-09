import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course, likedCourses, setLikedCourses }) {

  const clickHandler = () => {
    if(likedCourses.includes(course.id)) {
      setLikedCourses(prev => {
        const data = prev.filter(el => el !== course.id);
        return data;
      })
      toast.warning('like removed');
    }
    else {
      setLikedCourses(prev => [...prev, course.id]);
      toast.success('liked course')
    }
  }
  return (
    <div className="w-[300px] bg-bgDark  rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} />
        <div className=" grid place-items-center w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3">
        <button onClick={clickHandler}>
          {likedCourses.includes(course.id) ? <FcLike fontSize={"1.75rem"}/> : <FcLikePlaceholder />}
        </button>
      </div>
      </div>
      
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className="mt-2 text-white">{course.description}</p>
      </div>
    </div>
  );
}

export default Card;
