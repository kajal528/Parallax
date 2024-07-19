import { useState } from "react";
import { ArrowLeft, ArrowRight, StarFilled, StarUnfilled } from "../Icons/Icons";

interface SliderProps {
  Testimonials: TestimonialsProps[];
}
interface TestimonialsProps {
  UserImage: string;
  Name: string;
  Course: string;
  Rating: number;
  Comment: string;
}

const Slider = ({ Testimonials }: SliderProps) => {
  const expected = 5;
  const slideCountToDisplay = 3;
  const totalPage = Testimonials.length-3+1;
  const [currentPage, setCurrentPage] = useState(0);
  const [currentTestimonials, setCurrentTestimonials] = useState(()=>{
    return Testimonials.slice(currentPage, slideCountToDisplay+currentPage)
  })

  const Rating = (expected: number, actual: number) => {
    const rating = Array(expected)
      .fill(1)
      .map((val, index) => index + 1);
    return (
      <div className=" inline-flex gap-x-1">
        {rating.map((val, index) => {
        
          if (actual - index > 0) {
            return <div className=" w-4 h-4" key={index}><StarFilled /></div>;
          } else if (actual - index === 0) {
           return <div className=" w-4 h-4" key={index}><StarFilled /></div> ;
          } else {
           return <div className=" w-4 h-4 " key={index}><StarUnfilled /></div>;
          }
        })
        }
      </div>
    );
  };

  const getNextSlide =(page:number)=>{
    setCurrentPage(prev=>prev<totalPage?prev+1:prev); 
    setCurrentTestimonials(()=>{
      return Testimonials.slice(page+1, slideCountToDisplay+page+1)
    })
  }
  const getPrevSlide = (page:number)=>{
    setCurrentPage(prev=>prev>0?prev-1:prev); 
    setCurrentTestimonials(()=>{
      return Testimonials.slice(page-1, slideCountToDisplay+page-1)
    })
  }

  return (
    <div className="slider-container max-w-[1400px] mx-auto">
    <div className="slide-items flex gap-x-5 gap-y-2 flex-col lg:flex-row" >
      {currentTestimonials.map((testimonial, index)=>
      {
       return <div className=" slider-item bg-white relative  px-6 py-5 rounded-lg mt-6 max-w-[400px] mx-auto h-[280px] sm:h-64 lg:h-72 " key={index}>
        <div className=" absolute l-0 t-0 h-16 w-16 rounded-full background-gradient px-1 py-1">
          <img
            src={testimonial.UserImage}
            alt=""
            height={64}
            width={64}
            className=" w-full h-full rounded-full bg-white object-cover"
          />
        </div>
       <div className=" inline-block ml-20 mb-4">
        <span>{testimonial.Name}</span><br />
        <span>{testimonial.Course}</span><br />
        {Rating(expected, testimonial.Rating)}
        </div>
      <p>{testimonial.Comment}</p>
    </div>
})}
    </div>
    <div className=" max-w-max  mx-auto mt-6 mb-4">
    <button className=" prev inline-block align-middle mx-3 hover:-translate-y-[5%] transition-all duration-150 disabled:transform-none" onClick={()=>getPrevSlide(currentPage)}
  disabled={currentPage===0}> <ArrowLeft color={currentPage===0?'#d2cfcf':'white'}/></button>
    <span className=" align-middle text-white font-semibold mx-3 space-x-[2px]">
     <span>{currentPage+1}</span><span>{'/'}</span><span>{totalPage}</span>
    </span>
    <button className=" next inline-block align-middle mx-3 hover:-translate-y-[5%] transition-all duration-150 disabled:transform-none" onClick={()=>getNextSlide(currentPage)}
   disabled={currentPage===slideCountToDisplay-1}> <ArrowRight  color={currentPage===slideCountToDisplay-1?'#d2cfcf':'white'}/></button>
    </div>
    
    </div>
  );
};

export default Slider;
