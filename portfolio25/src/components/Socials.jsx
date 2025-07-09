import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io5";

export const Socials = () => {
    return (
        <div className="font-vt323 flex gap-5 text-white text-2xl">
            <a
                href="https://github.com/SANJOY-PAUL-0981"
                target="_blank">
                <FaGithub className="hover:text-red-500 duration-200 text-[27px]" />
            </a>
            <a
                href="https://x.com/Sanj0yX"
                target="_blank">
                <BsTwitterX className="hover:text-red-500 duration-200 text-[27px]" />
            </a>
            <a
                href="mailto:paulsanjoy2923@gmail.com"
                target="_blank">
                <SiGmail className="hover:text-red-500 duration-200 text-[27px]" />
            </a>
            <a
                href="https://www.linkedin.com/in/sanjoy-paul-b0053122a/"
                target="_blank">
                <IoLogoLinkedin className="hover:text-red-500 duration-200 text-[27px]" />
            </a>
        </div>
    )
}