import CourseBenefits from "./CourseBenefits";
import { Search } from "../Icons/Icons";
import ImageBox from "./ImageBox";
import { ChangeEvent, useState } from "react";

const SearchCourses = () => {
  const [course, setCourse] = useState("");
  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setCourse(event.target.value);
    console.log(event.target.value);
  }

  return (
    <section className=" mt-16 mb-4 ">
      <h1 className=" text-2xl font-bold text-center m-2">Search Courses</h1>
      <div className=" search-container flex flex-wrap mx-2 justify-center gap-4 items-center mt-4 sticky">
        <div className=" search-input border-[1px] border-border inline-flex px-5 py-2 gap-4 flex-grow bg-white rounded-lg w-full max-w-[400px] items-center justify-start">
          <Search height={"20"} width={"20"} fill={"#7e57d4"} />
          <input
            type="search"
            placeholder="Search for over 50+ courses"
            value={course}
            name={"search-courses"}
            className=" grow focus:outline-none text-xl "
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <button className=" search-button font-bold  text-white px-6 py-2 bg-white rounded-lg bg-gradient-to-br from-primary to-secondary">
          Search
        </button>
      </div>
      <div className="benefits relative my-20 ">
        <CourseBenefits />
      </div>
    </section>
  );
};

export default SearchCourses;
