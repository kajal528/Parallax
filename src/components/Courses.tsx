import React from 'react'
import PopularCourses from './PopularCourses'
import { PopularCoursesConstants } from '../constant/constant'
import { OpenBook, Star, User } from '../Icons/Icons'
import Teacher1 from '../assets/teacher-1.jpg'
import Teacher2 from '../assets/teacher-2.jpg'
import Teacher3 from '../assets/teacher-3.jpg'
import Course1 from '../assets/Development.jpg'
import Course2 from '../assets/UX3.jpg'
import Course3 from '../assets/Python.jpg'



const Courses = () => {
  return (
    <div className='courses grid md:grid-cols-3 grid-row-3 mt-8 mb-4 gap-y-4 gap-x-8 max-w-[1400px] mx-auto'>
        <div className=' course rounded-2xl  bg-background border-[12px] w-full max-w-[400px] mx-auto py-4 relative border-transparent'>
            <img src={Course1} alt="" height={100} width={200} className='course w-full rounded-lg object-cover'/>
            <div className=' tag bg-violet-200 relative inline-block rounded-lg px-2 py-1 my-4'><span className=' px-2 py-1 text-sm before:before-content ml-2 before:ml-2'>{PopularCoursesConstants.Course1.Tag}</span></div>
            <div className=' rating bg-primary text-white inline-flex absolute  right-0 px-3 py-1  my-4 gap-2 rounded-md items-center justify-center'><Star height={'12'} width={'12'} fill={"#fce913"}/><span>{PopularCoursesConstants.Course1.Rating}</span></div>
            <div className=' font-semibold my-1'><span>{PopularCoursesConstants.Course1.CoursePart1}</span><br />{PopularCoursesConstants.Course1.CoursePart2}</div>
            <div className=' classes inline-flex  gap-2 rounded-md items-center mr-4 my-2'><OpenBook height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course1.Classes}</span></div>
            <div className=' students inline-flex  gap-2 rounded-md items-center mr-4 my-2'><User height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course1.StudentsCount}</span></div>
            <div className=' h-[2px] w-full bg-gray-400 my-2'></div>
            
            <span className=' font-semibold text-lg align-middle '>{PopularCoursesConstants.Course1.Price}</span>
            <div className=' inline-flex items-center absolute right-0 gap-2  text-primary'><div className=' relative'><img src={Teacher1} alt="" height={40} width={40} className='h-10 w-10 rounded-full object-cover'/><div className=' h-2 w-2 bg-[#65f229] absolute rounded-full right-1 bottom-0'/></div><span>{PopularCoursesConstants.Course1.Teacher}</span></div>
            
        </div>
        <div className=' course rounded-2xl  bg-background border-[12px] w-full max-w-[400px] mx-auto py-4 relative border-transparent'>
            <img src={Course2} alt="" height={100} width={200} className='course w-full rounded-lg  object-cover'/>
            <div className=' tag bg-violet-200 relative inline-block rounded-lg px-2 py-1 my-4'><span className=' px-2 py-1 text-sm before:before-content ml-2 before:ml-2'>{PopularCoursesConstants.Course2.Tag}</span></div>
            <div className=' rating bg-primary text-white inline-flex absolute  right-0 px-4 py-1 my-4 gap-2 rounded-md items-center justify-center'><Star height={'12'} width={'12'} fill={"#fce913"}/><span>{PopularCoursesConstants.Course2.Rating}</span></div>
            <div className=' title font-semibold my-1'><span>{PopularCoursesConstants.Course1.CoursePart2}</span><br />{PopularCoursesConstants.Course2.CoursePart2}</div>
            <div className=' classes inline-flex  gap-2 rounded-md items-center mr-4 my-2'><OpenBook height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course2.Classes}</span></div>
            <div className=' students inline-flex  gap-2 rounded-md items-center mr-4 my-2'><User height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course2.StudentsCount}</span></div>
            <div className=' h-[2px] w-full bg-gray-400 my-2'></div>
            <span className=' price font-semibold text-lg align-middle '>{PopularCoursesConstants.Course2.Price}</span>
            <div className=' faculty inline-flex items-center absolute right-0 gap-2  text-primary'><div className=' relative'><img src={Teacher2} alt="" height={40} width={40} className='h-10 w-10 rounded-full object-cover '/><div className=' h-2 w-2 bg-[#65f229] absolute rounded-full right-1 bottom-0'/></div><span>{PopularCoursesConstants.Course2.Teacher}</span></div>
        </div>
        <div className=' course rounded-2xl  bg-background border-[12px] w-full max-w-[400px] mx-auto py-4 relative border-transparent'>
            <img src={Course3} alt="" height={100} width={200} className='course w-full rounded-lg object-cover'/>
            <div className=' tag bg-violet-200 relative inline-block rounded-lg px-2 py-1 my-4'><span className=' px-2 py-1 text-sm before:before-content ml-2 before:ml-2'>{PopularCoursesConstants.Course3.Tag}</span></div>
            <div className=' rating bg-primary text-white inline-flex absolute  right-0 px-4 py-1  my-4 gap-2 rounded-md items-center justify-center'><Star height={'12'} width={'12'} fill={"#fce913"}/><span>{PopularCoursesConstants.Course3.Rating}</span></div>
            <div className=' title font-semibold my-1'><span>{PopularCoursesConstants.Course3.CoursePart1}</span><br />{PopularCoursesConstants.Course3.CoursePart2}</div>
            <div className=' classes inline-flex  gap-2 rounded-md items-center mr-4 my-2'><OpenBook height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course3.Classes}</span></div>
            <div className=' students inline-flex  gap-2 rounded-md items-center mr-4 my-2'><User height={'20'} width={'20'} fill={"#ffffff"} stroke={"#7e57d4"}/><span>{PopularCoursesConstants.Course3.StudentsCount}</span></div>
            <div className=' h-[2px] w-full bg-gray-400 my-2'></div>
            <span className=' price font-semibold text-lg align-middle '>{PopularCoursesConstants.Course3.Price}</span>
            <div className=' faculty inline-flex items-center absolute right-0 gap-2  text-primary'><div className=' relative'><img src={Teacher3} alt="" height={40} width={40} className='h-10 w-10 rounded-full object-cover'/><div className=' h-2 w-2 bg-[#65f229] absolute rounded-full right-1 bottom-0'/></div><span>{PopularCoursesConstants.Course3.Teacher}</span></div>
        </div>
    </div>
  )
}

export default Courses