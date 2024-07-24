import { useState } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import { Benefits } from "../constant/constant";
import Image1 from "../assets/student-image-2.jpg";
import Image2 from "../assets/student-image-3.jpg";
import Image3 from "../assets/student-image-4.jpg";
import Image4 from "../assets/student-image.jpg";
import ImageBox from "./ImageBox";
import { GraduationCap, OpenBook, Play, User } from "../Icons/Icons";

const CourseBenefits = () => {
  const [image, setImage] = useState(Image1);

  return (
    <>
      <div>
        <h1 className=" text-3xl tracking-wide font-semibold text-center">
          <span className=" font-bold bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text">
            {Benefits.HeaderPart1}
          </span>{" "}
          &nbsp;{Benefits.HeaderPart2} <br /> {Benefits.HeaderPart3}
        </h1>
        <div className=" flex gap-x-5 relative lg:px-20  flex-col-reverse h-max  lg:flex-row mb-20 mt-10">
          <div className=" h-max space-y-20">
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              onProgressChange={(e) => {
                if (e >= 0.4 && e < 0.7) {
                  setImage(Image1);
                }
              }}
            >
              <div
                className="h-full flex flex-col my-10 mx-10 justify-center md:items-center lg:items-start "
                id="1"
              >
                <li className=" flex relative mt-4">
                  <div className=" rounded-full  bg-primary absolute h-16 w-16 items-center justify-center left-0 top-0">
                    <GraduationCap
                      height={"36"}
                      width={"36"}
                      fill="#7e57d4"
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      }
                    />{" "}
                  </div>
                  <div className="ml-24 ">
                    <h1 className=" font-semibold text-xl tracking-wider mb-1">
                      {Benefits.Benefit1.Header}
                    </h1>
                    <p className=" max-w-[450px]">
                      {Benefits.Benefit1.Paragraph}
                    </p>
                  </div>
                </li>
              </div>
            </Parallax>
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              opacity={[0, 2]}
              onProgressChange={(e) => {
                if (e >= 0.4 && e < 0.7) {
                  setImage(Image2);
                }
              }}
            >
              <div
                className="h-full flex flex-col my-10 mx-10 justify-center md:items-center lg:items-start "
                id="benefit2"
              >
                <li className=" flex relative mt-4">
                  <div className=" rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0">
                    <OpenBook
                      height={"36"}
                      width={"36"}
                      fill="#FA8072"
                      stroke="#ffffff"
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      }
                    />{" "}
                  </div>
                  <div className="ml-24 ">
                    <h1 className=" font-semibold text-xl tracking-wider mb-2">
                      {Benefits.Benefit2.Header}
                    </h1>
                    <p className=" max-w-[450px]">
                      {Benefits.Benefit2.Paragraph}
                    </p>
                  </div>
                </li>
              </div>
            </Parallax>
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              opacity={[0, 2]}
              onProgressChange={(e) => {
                if (e >= 0.4 && e < 0.7) {
                  setImage(Image3);
                }
              }}
            >
              <div
                className=" h-full  flex flex-col my-10 mx-10 justify-center md:items-center lg:items-start "
                id="benefit3"
              >
                <li className=" flex relative mt-4">
                  <div className=" rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0">
                    <User
                      height={"36"}
                      width={"36"}
                      fill="#FA8072"
                      stroke="#ffffff"
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      }
                    />{" "}
                  </div>
                  <div className="ml-24 ">
                    <h1 className=" font-semibold text-xl tracking-wider mb-2">
                      {Benefits.Benefit3.Header}
                    </h1>
                    <p className=" max-w-[450px]">
                      {Benefits.Benefit3.Paragraph}
                    </p>
                  </div>
                </li>
              </div>
            </Parallax>
            <Parallax
              shouldAlwaysCompleteAnimation={true}
              opacity={[0, 2]}
              onProgressChange={(e) => {
                if (e >= 0.4 && e < 0.7) {
                  setImage(Image4);
                }
              }}
            >
              <div
                className=" h-full flex flex-col my-10 mx-10 justify-center md:items-center lg:items-start "
                id="benefit4"
              >
                <li className=" flex  relative mt-4">
                  <div className=" rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0">
                    <Play
                      height={"36"}
                      width={"36"}
                      fill="#FA8072"
                      stroke="#ffffff"
                      className={
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      }
                    />{" "}
                  </div>
                  <div className="ml-24 ">
                    <h1 className=" font-semibold text-xl tracking-wider mb-2">
                      {Benefits.Benefit4.Header}
                    </h1>
                    <p className=" max-w-[450px]">
                      {Benefits.Benefit4.Paragraph}
                    </p>
                  </div>
                </li>
              </div>
            </Parallax>
          </div>
          <Parallax
            speed={-30}
            translateY={["0px", "0px"]}
            style={{
              transition: "all",
              transitionDuration: "300ms",
            }}
          >
            <div className="relative m-auto h-full mt-7">
              {" "}
              <div className=" sticky top-10 w-full">
                <div className="  flex justify-center h-[400px] lg:items-start">
                  <ImageBox />
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default CourseBenefits;
