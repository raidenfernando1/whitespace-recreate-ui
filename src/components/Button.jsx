import ArrowRight from '../assets/icons/ArrowRight'


function Button ({text}) {
    return(
        <button className="cursor-pointer mb-5 rounded bg-[#4F9CF9] px-5 py-3 text-base text-[#FFFFFF] hover:bg-[#A7CEFC] hover:text-[#212529]">
            {text}
            <ArrowRight/>
        </button>
    )
}

export default Button