import EmailForm from "@/components/contact/EmailForm";
import { FC } from "react";
import { LogosLinkedinIcon } from "../../../public/svgs/LinkedInIcon";
import EmailIcon from "../../../public/svgs/EmailIcon";
import WhatsAppLogo from "../../../public/svgs/WhatsAppLogo";

const ContactPage: FC = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center pb-20">
      <div className="">
        {" "}
        <div className=" ">
          <h1 className="text-6xl md:text-4xl font-bold">Get In Touch</h1>
        </div>
      </div>

      <div className=" w-full lg:w-1/2 lg:h-full">
        <EmailForm />
      </div>
      <div className="flex gap-4 justify-center items-center">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogosLinkedinIcon className="w-10 h-10" />
        </a>
        <a
          href="https://mail.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="w-10 h-10" />{" "}
        </a>
        <a href="https://wa.me/27662465655" target="_blank">
          <WhatsAppLogo className="w-10 h-10" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
