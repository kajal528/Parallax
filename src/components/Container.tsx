import { UpArrow } from "../Icons/Icons";
import { HeroConstants } from "../constant/constant";

const TopLeftContainer = () => {
  return (
    <div className=" flex items-center gap-4 px-12 py-4 rounded-lg shadow-2xl max-w-max " style={{
        background: 'rgb(255, 255, 255, 0.9)',
        color: 'violet' 
    }}>
      <div className=" inline-flex size-14 rounded-full bg-primary justify-center items-center rotate-[-45deg] z-[10]">
        <UpArrow/>
      </div>
      <div className=" inline-flex flex-col items-start justify-start z[5] font-bold">
        <h1 className=" text-3xl font-bold text-primary mx-auto">{HeroConstants.ContainerTopLeft.Header}</h1>
        <p className=" text-xl tracking-wide">{HeroConstants.ContainerTopLeft.Paragraph}</p>
      </div>
    </div>
  )
  
}
const BottomLeftContainer = () => {
  return 
    <div>
      <h1></h1>
      <p></p>
    </div>
  
}

const RightContainer = () => {
  return 
    <div>
      <h1></h1>
      <p></p>
    </div>
  
}

export { TopLeftContainer, BottomLeftContainer, RightContainer };
