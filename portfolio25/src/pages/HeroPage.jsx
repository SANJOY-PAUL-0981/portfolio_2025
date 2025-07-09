import SplineModel from "../components/ui/SplineModel"
import Particles from "../components/Particles"
import { Button } from 'pixel-retroui'
import { Bubble } from 'pixel-retroui';
import { IoMdCopy } from "react-icons/io"
import { FaArrowRight } from "react-icons/fa"
import { useState } from "react"
import { Socials } from "../components/Socials";

export const HeroPage = () => {
    const [copy, setCopy] = useState(false)

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

    return (
        <div className="relative min-h-screen w-[99vw] text-white overflow-x-hidden">
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
            <section className="min-h-screen flex justify-center items-center px-4">
                <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
                    <SplineModel />
                    <div className="flex flex-col gap-5">
                        <div className="text-left">
                            <p className="text-8xl font-vt323">
                                Hi I am <b className="text-red-500">Sanjoy</b> :)
                            </p>
                            <p className="text-red-500 font-dotgothic text-xl font-semibold">
                                Nice to meet you all, I am a passionate Web developer and CS undergrad
                            </p>
                        </div>

                        <div className="flex gap-5">
                            <Button
                                onClick={() => console.log('Clicked!')}
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
            <section className="h-[60vh] flex justify-center items-center">
                <h2 className="text-9xl">SKILLS</h2>
            </section>

            {/* Bottom-right alert */}
            {copy && (
                <Bubble
                    bg="transparent"
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
