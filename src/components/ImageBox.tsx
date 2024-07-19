import Student from '../assets/student-image.jpg'
import Student2 from '../assets/student-image-2.jpg'
import Student3 from '../assets/student-image-3.jpg'
import Student4 from '../assets/student-image-4.jpg'


const ImageBox = () => {
  return (
    <div className='  image-box  mb-4  border-2 border-primary border-dashed px-1 rounded-[60px] w-full h-full max-w-[400px]'>
        <div className=' w-full h-full rounded-[56px]  bg-white grid grid-cols-2 grid-rows-2  gap-1 border-8 border-white'>
            <div className=' text-center w-full h-full rounded-tl-[56px] rounded-br-[56px]'>
                <img src={Student} alt=""  className=' w-full h-full object-cover object-top rounded-tl-[60px] rounded-br-[60px]'/>
            </div>
            <div className=' text-center rounded-tr-[56px] rounded-bl-[56px] w-full h-full'> 
            <img src={Student2} alt=""  className=' w-full h-full  object-cover object-top rounded-tr-[60px] rounded-bl-[60px]'/>

            </div>
            <div className=' text-center rounded-tr-[56px] rounded-bl-[56px] w-full h-full'> 
            <img src={Student3} alt=""  className=' w-full h-full  object-cover object-top rounded-tr-[60px] rounded-bl-[60px]'/>
               </div>
            <div className=' text-center rounded-tl-[56px] rounded-br-[56px] w-full h-full'> 
            <img src={Student4} alt=""  className=' w-full h-full  object-cover object-top rounded-tl-[60px] rounded-br-[60px]'/>
        </div>
    </div>
    </div>
  )
}

export default ImageBox