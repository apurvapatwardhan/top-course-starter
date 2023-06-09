import React, { useState } from 'react'
import Card from "./Card"
function Cards({courses, category}) {

  const [likedCourse, setLikedCourses] = useState([]);
  const getCourses = (category) => {
    let allCourses = [];
    if(category == "All") {
      Object.values(courses).forEach(courseCat => {
        courseCat.forEach(course => {
          allCourses.push(course);
        })
      })
    }
    else {
      courses[category].forEach(c => allCourses.push(c));
    }
    return allCourses;
  }
  return (
    <div className='gap-8 flex justify-center items-center mx-auto min-h-[50vh] max-w-[1200px]  flex-wrap'>
      {
        getCourses(category).map(course => <Card likedCourses={likedCourse} setLikedCourses={setLikedCourses
        } key={course.id} course = {course}/>)
      }
    </div>
  )
}

export default Cards
