import SplineModel from "../components/ui/SplineModel"
import Particles from "../components/Particles"
import { Button, Popup, Bubble, Input } from 'pixel-retroui'
import { IoMdCopy } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa"
import { useState } from "react"
import { Socials } from "../components/Socials";
import { Skills } from "../components/Skills";
import RotatingText from "../components/ui/RotatingText"
import { Projects } from "../components/Projects";
import { AboutMe } from "../components/AboutMe";
import { Footer } from "../components/Footer";
import { FloatingDock } from "../components/ui/floating-dock"
import { FaHome } from "react-icons/fa";
import { IoTerminalOutline } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa";

export const HeroPage = () => {
    const links = [
        {
            title: "Home",
            icon: (
                <FaHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#home",
        },

        {
            title: "Skills",
            icon: (
                <IoTerminalOutline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#skills",
        },
        {
            title: "Projects",
            icon: (
                <FaFolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "About Me",
            icon: (
                <FaIdCard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#about",
        },
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [copy, setCopy] = useState(false)

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const textToCopy = 'npx sanjoyxyz'

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy)
            setCopy(true)
            setTimeout(() => setCopy(false), 5000)
        } catch (err) {
            console.error("Copy failed:", err)
        }
    }

    const handleSubmit = () => {
        console.log("submitted")
    }

    return (
        <div className="relative min-h-screen w-[99vw] text-white overflow-x-hidden scroll-smooth">
            {/* Particle Background */}
            <div className="fixed inset-0 -z-10 bg-black">
                <Particles
                    particleColors={['#ffffff', '#ffffff']}
                    particleCount={500}
                    particleSpread={10}
                    speed={0.1}
                    particleBaseSize={100}
                    moveParticlesOnHover={true}
                    alphaParticles={false}
                    disableRotation={true}
                />
            </div>

            {/* Main Hero section */}
            <section id="home" className="min-h-screen flex justify-center items-center px-4">
                <div className="flex flex-col lg:flex-row items-center gap-5 text-center lg:text-left">
                    <SplineModel />
                    <div className="flex flex-col gap-5">
                        <div className="text-left">
                            <p className="text-8xl font-vt323">
                                Hello World!
                            </p>
                            <p className="text-8xl font-vt323">
                                Hi I am <b className="text-red-500">Sanjoy</b> :)
                            </p>
                            <p className="text-red-500 font-dotgothic text-xl font-semibold flex items-center gap-2">
                                Nice to meet you all, I am a passionate
                                <RotatingText
                                    texts={['Web Developer', 'ML Enthusiast', 'CS Undergrad']}
                                    mainClassName="px-2 w-[10vw] sm:px-2 md:px-3 bg-red-500 text-black overflow-hidden sm:py-1 md:py-2 justify-center rounded"
                                    staggerFrom={"last"}
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    exit={{ y: "-120%" }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                    rotationInterval={2000}
                                />
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <Button
                                onClick={openPopup}
                                borderColor="white"
                                bg="black"
                                textColor="white">
                                <p className="flex items-center gap-2 px-5">
                                    Contact Me <FaArrowRight />
                                </p>
                            </Button>

                            <Button
                                onClick={handleCopy}
                                borderColor="white"
                                bg="black"
                                textColor="white">
                                <p className="flex items-center gap-2">
                                    npx sanjoyxyz <IoMdCopy />
                                </p>
                            </Button>
                        </div>

                        <Socials />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="flex justify-center min-h-[100vh]">
                <Skills />
            </section>

            {/*Project Section*/}
            <section id="projects" className="flex justify-center min-h-[100vh] py-40">
                <Projects />
            </section>

            {/*AboutMe Section*/}
            <section id="about" className="flex justify-center min-h-[100vh] py-40">
                <AboutMe />
            </section>

            {/*Footer*/}
            <Footer />

            {/*Dock - sticky and interactive */}
            <div className="fixed bottom-0 left-0 w-full z-50 flex justify-center">
                <div className="pointer-events-auto">
                    <FloatingDock
                        mobileClassName="translate-y-0"
                        items={links}
                        className="bg-transparent"
                    />
                </div>
            </div>

            {/*PopUp form*/}
            <Popup
                bg="#303030"
                textColor="white"
                baseBg="#252525"
                isOpen={isPopupOpen}
                onClose={closePopup}
                className="text-center">
                <p className="text-3xl mb-4">Welcome!</p>
                <p className="mb-4"> Let's get in touch</p>
                <form onSubmit={handleSubmit} className=" flex flex-col gap-4 items-center">
                    <div className="flex flex-col items-start">
                        <p>Full Name</p>
                        <Input bg="#404040" textColor="white" borderColor="#151515" className="w-[28vw]" placeholder="Enter Your Name" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p>Email</p>
                        <Input bg="#404040" textColor="white" borderColor="#151515" className="w-[28vw]" placeholder="Enter Your Email" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p>Subject</p>
                        <Input bg="#404040" textColor="white" borderColor="#151515" className="w-[28vw]" placeholder="Enter Email Subject" />
                    </div>
                    <div className="flex flex-col items-start">
                        <p>Body</p>
                        <Input bg="#404040" textColor="white" borderColor="#151515" className="w-[28vw] h-20" placeholder="Enter Email Body" />
                    </div>
                    <Button bg="gray" type="submit" textColor="white" className=" w-20">
                        Submit
                    </Button>
                </form>
            </Popup>

            {/* Bottom-right alert */}
            {copy && (
                <Bubble
                    bg="black"
                    borderColor="white"
                    direction="left"
                    className="fixed bottom-5 right-5 z-50">
                    <p className="text-white">Copied to clipboard!</p>
                    <p className="text-white text-sm">Paste it on terminal to see more :)</p>
                </Bubble>
            )}
        </div>
    )
}
