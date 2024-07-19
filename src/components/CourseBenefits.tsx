import { Benefits} from '../constant/constant'
import { GraduationCap, OpenBook, Play, User } from '../Icons/Icons'

const CourseBenefits = () => {
  return (
    <div>
        <h1 className=' text-2xl tracking-wide font-semibold '><span className=' font-bold bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text'>{Benefits.HeaderPart1}</span> &nbsp;{Benefits.HeaderPart2} <br /> {Benefits.HeaderPart3}</h1>
        <ul className=' max-w-[450px] mt-4'>
          <li className=' flex relative mt-4'>
            <div className=' rounded-full  bg-primary absolute h-16 w-16 items-center justify-center left-0 top-0'><GraduationCap height={'36'} width={'36'} fill='#7e57d4' className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/> </div>
            <div className='ml-24 '>
            <h1 className=' font-semibold text-xl tracking-wider mb-1'>{Benefits.Benefit1.Header}</h1>
            <p>{Benefits.Benefit1.Paragraph}</p>
            </div>
          </li>
          <li className=' flex relative mt-4'>
            <div className=' rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0'><OpenBook height={'36'} width={'36'} fill='#FA8072' stroke='#ffffff' className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/> </div>
            <div className='ml-24 '>
            <h1 className=' font-semibold text-xl tracking-wider mb-2'>{Benefits.Benefit2.Header}</h1>
            <p>{Benefits.Benefit2.Paragraph}</p>
            </div>
          </li>
          <li className=' flex relative mt-4'>
            <div className=' rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0'><User height={'36'} width={'36'} fill='#FA8072' stroke='#ffffff' className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/> </div>
            <div className='ml-24 '>
            <h1 className=' font-semibold text-xl tracking-wider mb-2'>{Benefits.Benefit3.Header}</h1>
            <p>{Benefits.Benefit3.Paragraph}</p>
            </div>
          </li>
          <li className=' flex  relative mt-4'>
            <div className=' rounded-full  bg-secondary absolute h-16 w-16 items-center justify-center left-0 top-0'><Play height={'36'} width={'36'} fill='#FA8072' stroke='#ffffff' className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}/> </div>
            <div className='ml-24 '>
            <h1 className=' font-semibold text-xl tracking-wider mb-2'>{Benefits.Benefit3.Header}</h1>
            <p>{Benefits.Benefit3.Paragraph}</p>
            </div>
          </li>
        </ul>
    </div>
  )
}

export default CourseBenefits