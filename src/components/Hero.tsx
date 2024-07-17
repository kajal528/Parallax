import { HeroConstants } from "../constant/constant";
import { Button, ButtonTypes, PlayButton } from "./Button";
import HeroImage from "../assets/hero-image.jpg";
import {TopLeftContainer} from './Container'

const Hero = () => {
  return (
    <section className=" lg:px-10 md:px-15 px-10 max-w-[1400px] lg:mx-auto">
      <div className=" main flex flex-wrap justify-center lg:justify-start w-full mt-16 gap-x-2">
        <div className=" header-section lg:max-w-[450px] lg:mt-20 mt-4 text-center lg:text-start  shrink">
          <h1 className=" heading text-[48px] leading-[56px] font-bold tracking-wider lg:max-w-[400px]">
            {HeroConstants.Header}
          </h1>
          <p className=" paragraph mt-8 mb-6">{HeroConstants.Paragraph}</p>
          <div className=" hero-button-container flex gap-8 md:gap-16 lg:gap-16 w-full items-center justify-center lg:justify-start">
            <Button
              type={ButtonTypes.Primary}
              children={HeroConstants.EnrollButton}
            />
            <div className=" flex items-center gap-5 text-lg tracking-wide">
              <PlayButton />{" "}
              <p className=" underline text-start">
                {HeroConstants.PlayButton}
              </p>
            </div>
          </div>
        </div>
        <div className="image-section grow mt-20 lg:mt-10 w-[500px] h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] relative">
          <img
            src={HeroImage}
            alt="heroimage"
            width={400}
            height={400}
            className="scale-110 relative z-[1] w-[500px] h-[500px] mx-auto lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] object-contain"
          />
          <div className=" w-[500px] h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[600px] xl:h-[600px] border-2 border-dashed border-primary  rounded-full  relative  z-[-1] mx-auto -translate-y-full">
            <div className=" border-[10px] border-white h-full w-full rounded-full bg-gradient-to-br from-primary to-secondary" />
          </div>
          <div className=" absolute top-1/2 -translate-y-1/2 z-[2]  bg-white opacity-35" style={{
            //  backgroundColor: 'rgba(255,255,255,.5)',
            //  color: '#fff'
          }}>
            <TopLeftContainer/>
        </div>
        </div>
        
      </div>
      
      <div>logos</div>
    </section>
  );
};

export default Hero;
