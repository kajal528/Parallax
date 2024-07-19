import React from 'react'
import { InstructorConstants } from '../constant/constant'
import InstructorImagee from '../assets/Instructor2.jpg'

const Instructor = () => {
  return (
    <section className=' instructor-container mt-4 lg:mt-16 mb-4 px-8 py-8 max-w-[1920px] mx-auto flex flex-wrap justify-center gap-x-20 gap-y-10'>
        <div>
        <h1 className=' header font-semibold text-2xl mb-3'><span>{InstructorConstants.HeaderPart1}</span><br /><span>{InstructorConstants.HeaderPart2}&nbsp;</span><span className=' bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent'>{InstructorConstants.HeaderPart3}</span></h1>
        <p className=' max-w-[500px]'>{InstructorConstants.Paragraph}</p>
        <h1 className='header font-semibold text-2xl mt-6 mb-4'>{InstructorConstants.PerksHeader}</h1>
        <ul className=' grid grid-cols-2 max-w-[600px] list-disc px-4 gap-x-8 gap-y-2 items-start justify-center'>
            <li>{InstructorConstants.PerksList.Perk1}</li>
            <li>{InstructorConstants.PerksList.Perk2}</li>
            <li>{InstructorConstants.PerksList.Perk3}</li>
            <li>{InstructorConstants.PerksList.Perk4}</li>
            <li>{InstructorConstants.PerksList.Perk5}</li>
            <li>{InstructorConstants.PerksList.Perk6}</li>
            <li>{InstructorConstants.PerksList.Perk7}</li>
            <li>{InstructorConstants.PerksList.Perk8}</li>
        </ul>
        <button className=' background-gradient px-4 py-2 rounded-lg mt-6 text-white max-w-60'>{InstructorConstants.Button}</button>
        </div>
        <div className='  max-w-80 border-2 border-dashed border-primary  mt-4 rounded-b-full px-1 py-1'>
            <div className=' w-full h-full background-gradient rounded-b-full px-4 py-4'>
                <img src={InstructorImagee} alt="" className=' w-full h-full rounded-b-full object-cover object-top' />
            </div>
        </div>
    </section>
  )
}

export default Instructor