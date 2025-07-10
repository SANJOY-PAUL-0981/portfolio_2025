import love from "/love.png"

export const Footer = () => {
    return(
        <div className="flex justify-center items-center p-5 gap-2">
            Made with <img className="size-8" src={love} alt="love" /> By <a href="https://x.com/Sanj0yX">@SanjoyPaul0981</a>
        </div>
    )
}