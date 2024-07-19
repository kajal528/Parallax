import { FooterConstants } from "../constant/constant"
import { Facebook, Instagram, Twitter } from "../Icons/Icons"
const Footer = () => {
  return (
    <footer className=' max-w-[1980px] mx-auto  mt-12 px-4  pb-8'>
       <div className=" px-16 py-8 flex items-start gap-y-4 flex-col md:flex-row md:justify-between  md:gap-x-5">
        <div className="  ">
            <h1 className=" text-bold text-white text-2xl mb-2">{FooterConstants.Brand.Header}</h1>
            <p className=" max-w-[200px] text-white mb-2">{FooterConstants.Brand.Paragraph}</p>
            <div className=" inline-flex gap-x-2">
                <Facebook/>
                <Twitter/>
                <Instagram/>
            </div>
        </div>
        <div className=" inline-flex flex-col justify-start items-start gap-y-1 ">
            <h1 className=" text-bold text-white text-2xl">{FooterConstants.Title1.Header}</h1>
            <a href="#" className=" text-white ">{FooterConstants.Title1.Link1}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title1.Link2}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title1.Link3}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title1.Link4}</a>    
        </div>
        <div className=" inline-flex flex-col justify-start items-start gap-y-1 ">
            <h1 className=" text-bold text-white text-2xl">{FooterConstants.Title2.Header}</h1>
            <a href="#" className=" text-white ">{FooterConstants.Title2.Link1}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title2.Link2}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title2.Link3}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title2.Link4}</a>    
        </div>
        <div className=" inline-flex flex-col justify-start items-start gap-y-1 ">
            <h1 className=" text-bold text-white text-2xl">{FooterConstants.Title3.Header}</h1>
            <a href="#" className=" text-white ">{FooterConstants.Title3.Link1}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title3.Link2}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title3.Link3}</a>
            <a href="#" className=" text-white ">{FooterConstants.Title3.Link4}</a>    
        </div>
        <div className=" gap-y-1">
            <h1 className=" text-bold text-white text-2xl ">{FooterConstants.Contact.Header}</h1>
            <span className=" text-white tracking-wider">{FooterConstants.Contact.Phone}</span><br />           
            <span className=" text-white">{FooterConstants.Contact.Email}</span>            
        </div>
        </div>
        <div className=" mb-4 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent via-white"/>
        <p className=" text-white text-center">
            Copyright &copy; 2023 Edtech. All rights reserved
        </p>
    </footer>
  )
}

export default Footer