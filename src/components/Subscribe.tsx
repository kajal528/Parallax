import { ChangeEvent, useState } from "react";
import { SubscribeConstants } from "../constant/constant";
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const inputHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <section className=" bg-white max-w-[1980px] mx-auto py-8 md:py-12  px-4 rounded-tl-[20px] rounded-br-[20px] sm:rounded-tl-[100px] sm:rounded-br-[100px] mb-2">
      <div className="subscribe mx-auto max-w-[600px] background-gradient pt-6 pb-8 rounded-3xl">
        <h1 className=" font-semibold text-xl text-white mt-3 text-center">
          {SubscribeConstants.Header}
        </h1>
        <p className="text-white mx-auto text-center max-w-[400px] mb-6">
          {SubscribeConstants.Paragraph}
        </p>
        <div className=" max-w-[500px] flex  flex-wrap gap-y-4">
          <input
            type="email"
            name={"email"}
            value={email}
            id={"email"}
            placeholder={"Enter your email..."}
            className=" px-6 py-3 rounded-lg text-xl focus:outline-none mx-auto"
            onChange={(event) => inputHandleChange(event)}
          />
          <button className="px-6 py-3 bg-white rounded-lg mx-auto sm:mx-0">
            <span className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text font-bold">
              {SubscribeConstants.Button}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
