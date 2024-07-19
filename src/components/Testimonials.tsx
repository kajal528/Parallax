import { TestimonialsConstants } from '../constant/constant'
import Slider from './Slider'

const Testimonials = () => {
    const testimonails = TestimonialsConstants.Testimonial
  
  return (
    <section className=' mt-6 px-4 py-6 md:py-12 max-w-[1900px] mx-auto'>
        <h1 className=' text-2xl font-semibold text-white tracking-wide py-2 text-center'>{TestimonialsConstants.Header}</h1>
        <p className=' text-white mt-2 max-w-[500px] mx-auto text-center'>{TestimonialsConstants.Paragraph}</p>
        <Slider Testimonials={testimonails}/>
    </section>
  )
}

export default Testimonials