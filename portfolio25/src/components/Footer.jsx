import love from "/love.png"

export const Footer = () => {
    return(
        <div className="lg:text-sm text-xs flex justify-center items-center p-5 gap-2">
            Made with <img className="size-8" src={love} alt="love" /> By <a href="https://x.com/Sanj0yX" target="blank_">@SanjoyPaul0981</a>
        </div>
    )
}