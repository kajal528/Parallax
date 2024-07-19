import { HeroConstants } from "../constant/constant";
import { Button, ButtonTypes, PlayButton } from "./Button";
import HeroImage from "../assets/hero-image.jpg";
import {BottomLeftContainer, RightContainer, TopLeftContainer} from './Container'
import Banner from "./Banner";

const Hero = () => {
  return (
    <section className="  max-w-[1920px] mx-auto px-2">
      <div className=" lg:mx-auto lg:px-10 md:px-10 sm:px-10 main flex flex-wrap justify-center lg:justify-start 2xl:justify-center w-full lg:mt-8 mt-6 gap-x-2">
        <div className=" header-section  lg:mt-20 mt-4 text-center lg:text-start mb-8 mx-auto lg:max-w-[450px]">
          <h1 className=" heading text-[48px] leading-[56px] font-bold tracking-wider lg:max-w-[400px] ">
            {HeroConstants.Header}
          </h1>
          <p className=" paragraph mt-8 mb-6">{HeroConstants.Paragraph}</p>
          <div className=" hero-button-container flex gap-8 md:gap-16 lg:gap-16 w-full items-center justify-center lg:justify-start">
            <Button
              type={ButtonTypes.Primary}
              children={HeroConstants.EnrollButton}
            />
            <div className=" flex items-center gap-2 text-lg tracking-wide">
              <PlayButton />{" "}
              <p className=" underline text-start">
                {HeroConstants.PlayButton}
              </p>
            </div>
          </div>
        </div>
        <div className="image-section grow 2xl:grow-0  mx-auto mt-20 lg:mt-10 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] relative">
          <img
            src={HeroImage}
            alt="heroimage"
            width={400}
            height={400}
            className="scale-110  relative z-[1] mx-auto  w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] object-contain"
          />
          <div className=" w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] border-2 border-dashed border-primary  rounded-full  relative  z-[-1] mx-auto -translate-y-full">
            <div className=" border-[10px] border-white h-full w-full rounded-full bg-gradient-to-br from-primary to-secondary" />
          </div>
          <div className=" absolute z-[2] -top-[15%] -left-[5%] sm:top-[10%] sm:-left-[5%] md:left-[5%] md:top-[25%] lg:-top-[8%] lg:left-[5%] xl:left-[5%] xl:top-[25%] ">
            <TopLeftContainer/>
        </div>
        <div className=" absolute z-[2] bottom-0 left-0 sm:bottom-4 sm:left-0 md:bottom-4 md:left-[5%] lg:bottom-0 lg:left-0 xl:bottom-4 xl:left-[5%]  ">
            <BottomLeftContainer/>
        </div>
        <div className=" absolute z-[2] right-0 top-1/2 -translate-y-1/2 sm:right-0 sm:top-1/2 md:right-[5%] md:top-1/2 ">
            <RightContainer/>
        </div>
        </div> 
      </div>
      <Banner/>
    </section>
  );
};

export default Hero;
