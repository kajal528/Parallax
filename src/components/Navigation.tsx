import { ChevronDown, Hamburger } from "../Icons/Icons";
import  { Button,ButtonTypes } from "./Button";

const Navigation = () => {
  return (
    <header className=" flex items-center lg:px-20 md:px-16 px-10 pt-8 pb-4 w-full max-w-[1600px] mx-auto">
      <h1 className=" text-2xl font-bold">EdTech.</h1>
      <nav className=" mx-auto hidden lg:block">
        <div className=" inline-flex items-center mx-4 gap-1">
          <a href="courses">Courses </a>
          <ChevronDown />
        </div>
        <div className=" inline-flex items-center mx-4 gap-1">
          <a href="teachers">Teachers</a>
          <ChevronDown />
        </div>
        <div className=" inline-flex items-center mx-4 gap-1">
          <a href="offers">Offers</a>
          <ChevronDown />
        </div>
        <div className=" inline-flex ml-4">
          <a href="contact">Contact</a>
        </div>
      </nav>
      <div className=" lg:inline-flex gap-5 mx-auto hidden">
        <Button type={ButtonTypes.Secondary} children={"Sign In"} />
        <Button type={ButtonTypes.Primary} children={"Free Trial"} />
      </div>
      <div className=" inline-flex ml-auto lg:hidden">
        <Hamburger />
      </div>
    </header>
  );
};

export default Navigation;
