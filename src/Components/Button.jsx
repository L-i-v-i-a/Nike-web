const Button = ({label, iconURl , backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
    ? `${backgroundColor} ${textColor} ${borderColor}`
    : "bg-sky-600 border-sky-600 text-white"
}
     rounded-full ${fullwidth && 'w-full'} "}`}>
        {label}
        {iconURl && <img
        src={iconURl}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
        />}
    </button>
  )
}

export default Button
