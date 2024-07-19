import { PopularCoursesConstants } from "../constant/constant"
import Courses from "./Courses"
const PopularCourses = () => {
  return (
    <section className=' mt-10 lg:mt-16 mb-4 px-4 py-8 bg-gradient-to-br from-primary to-secondary max-w-[1920px] mx-auto'>
<h1 className=" font-bold text-2xl text-center text-white py-2">{PopularCoursesConstants.Header}</h1>
<p className=" text-center text-white max-w-[500px] mx-auto">{PopularCoursesConstants.Paragraph}</p>
<Courses/>
    </section>
  )
}

export default PopularCourses