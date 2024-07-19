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
    <section className=" mt-8 mx-2 mb-4">
      <h1 className=" text-2xl font-bold text-center m-2">Search Courses</h1>
      <div className=" search-container flex flex-wrap mx-2 justify-center gap-4 items-center mt-4">
        <div className=" search-input inline-flex px-5 py-3 gap-2 flex-grow bg-white rounded-lg w-full max-w-[400px] items-center justify-start">
          <Search height={"20"} width={"20"} fill={"#7e57d4"} />
          <input
            type="search"
            placeholder="Search for over 50+ courses"
            value={course}
            name={"search-courses"}
            className=" grow focus:outline-none text-xl"
            onChange={(event) => handleInputChange(event)}
          />
        </div>
        <button className=" search-button text-white tracking-wider px-8 py-3 bg-white rounded-lg bg-gradient-to-br from-primary to-secondary">
          Search
        </button>
      </div>
      <div className="benefits mt-12 flex flex-wrap justify-center mx-4 lg:gap-x-20 md:gap-x-10">
        <ImageBox />
        <CourseBenefits />
      </div>
    </section>
  );
};

export default SearchCourses;
