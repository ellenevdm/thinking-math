import { FC } from "react";

const ContactPage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center pb-20">
      <div className="">
        {" "}
        <div className=" top-1/2 left-[5%] md:left-[10%] translate-x-[10%] ">
          <h1 className="text-6xl md:text-5xl font-bold">Get In Touch</h1>
        </div>
      </div>
      <div className="lg:w-3/4 w-full h-[1200px] md:h-[60vh] lg:h-[100vh] bg-gray-100 shadow-lg flex flex-col lg:flex-row">
        <div className="bg-gray-200 h: lg:w-2/3 lg:h-full"></div>
        <div className="bg-gray-800 lg:w-1/3 lg:h-full"></div>
      </div>
    </div>
  );
};

export default ContactPage;
