import { Card } from 'pixel-retroui';
import { FaArrowRight } from "react-icons/fa"

export const Projects = () => {
    return (
        <div>
            <p className="text-7xl text-white mb-8 text-center pb-40">PROJECTS</p>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-5 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>Cross Platform Student Management App</p>
                    <p className='text-dotgothic text-sm text-red-500'>This is a project which we made for our college, This app can run in both android and ios. The sole purpose of this app is save, manipulate and store the data of students in a structured manner. I basically did the backend part of this project.</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>Flutter</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ExpressJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ReactJS</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/Cross-Platform-Student-Management-App'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>

                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-6 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>Tsukifetch</p>
                    <p className='text-dotgothic text-sm text-red-500'>Tsukifetch is a CLI based System Information tool like neofetch. From tsukifetch We can fetch system Informations like ram, gpu, processor, memory, used memory etc. Unfortunately it only works in Linux devices. It is build in C language. If you faced any kind of error feel free to contact me.</p>
                    <div className='flex'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>C Language</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/Tsukifetch'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    )
}