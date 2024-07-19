import Brandlogo from '../assets/logo-no-background.svg'

const Banner = () => {
  return (
    <div className=' mx-auto w-full flex justify-center items-center py-4 bg-gradient-to-br from-primary to-secondary mt-4 z-[5] relative gap-20 overflow-hidden'>
      <img src={Brandlogo} alt="" height={64} width={200} className='lg:h-10 lg:w-30 h-5 w-20'/>
      <img src={Brandlogo} alt="" height={64} width={200} className='lg:h-10 lg:w-30 h-5 w-20'/>
      <img src={Brandlogo} alt="" height={64} width={200} className='lg:h-10 lg:w-30 h-5 w-20'/>
      <img src={Brandlogo} alt="" height={64} width={200} className='lg:h-10 lg:w-30 h-5 w-20'/>
      <img src={Brandlogo} alt="" height={64} width={200} className='lg:h-10 lg:w-30 h-5 w-20'/>
    </div>
  )
}

export default Banner