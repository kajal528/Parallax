import { UpArrow } from "../Icons/Icons";
import { HeroConstants } from "../constant/constant";
import User from "../assets/user1.jpg"
import Student1 from "../assets/user2.jpg"
import Student2 from "../assets/user3.jpg"
import Student3 from "../assets/user4.jpg"
import Student4 from "../assets/user5.jpg"
import Student5 from "../assets/user6.jpg"

const TopLeftContainer = () => {
  return (
    <div className=" flex items-center gap-[2px] px-6 py-2 rounded-lg shadow-2xl max-w-max bg-[rgba(241,240,240,0.8)]" >
      <div className=" inline-flex size-8 rounded-full bg-primary justify-center items-center rotate-[-45deg]">
        <UpArrow/>
      </div>
      <div className=" inline-flex flex-col items-start justify-start z[5]">
        <h1 className=" text-xl font-bold mx-auto text-primary">{HeroConstants.ContainerTopLeft.Header}</h1>
        <p className=" text-sm tracking-wide font-semibold">{HeroConstants.ContainerTopLeft.Paragraph}</p>
      </div>
    </div>
  )
  
}
const BottomLeftContainer = () => {
  return (
    <div className=" flex  max-w-max px-6 py-4 rounded-lg shadow-2xl gap-5 bg-[rgba(241,240,240,0.8)] ">
      <img src={User} alt="user" height={64} width={64} className=" rounded-full h-16 w-16 shadow-xl object-cover object-top scale-110"/>
      <div className="">
        <h1 className=" text-xl font-bold mx-auto text-primary">{HeroConstants.ContainerBottomLeft.Header}</h1>
      <p className=" text-sm tracking-wide font-semibold">{HeroConstants.ContainerBottomLeft.Paragraph}</p>
      <button className=" px-10 py-2 bg-primary text-white rounded-lg mt-4 text-lg">{HeroConstants.ContainerBottomLeft.Button}</button>
      </div>
    </div>
  )
}

const RightContainer = () => ( 
    <div className="  rounded-lg shadow-2xl px-4 py-2 sm:py-4 sm:px-5 bg-[rgba(241,240,240,0.8)]">
      <h1 className=" text-xl font-bold mx-auto text-primary text-center">{HeroConstants.ContainerCenterRight.Header}</h1>
      <p className=" text-sm tracking-wide font-semibold text-center">{HeroConstants.ContainerCenterRight.Paragraph}</p>
      <div className=" flex justify-center mt-2 sm:mt-5">
          <img src={Student1} alt="students" height={40} width={40} className=" rounded-full h-10 w-10 shadow-lg object-cover object-top scale-100 "/>
          <img src={Student2} alt="students" height={40} width={40} className=" rounded-full h-10 w-10 shadow-lg object-cover object-top scale-100  ml-[-15px]"/>
          <img src={Student3} alt="students" height={40} width={40} className=" rounded-full h-10 w-10 shadow-lg object-cover object-top scale-100  ml-[-15px]"/>
          <img src={Student4} alt="students" height={40} width={40} className=" rounded-full h-10 w-10 shadow-lg object-cover object-top scale-100 ml-[-15px]"/>
          <img src={Student5} alt="students" height={40} width={40} className=" rounded-full h-10 w-10 shadow-lg object-cover object-top scale-100  ml-[-15px]"/>
      </div>
    </div>
  
)

export { TopLeftContainer, BottomLeftContainer, RightContainer };
