const Button = ({label, iconUrl}) => {
  return (
    <button className= 'flex justify-center items-center gap-2 px-7 py-4 border border-red-400 font-montserrat text-lg leading-none rounded-full bg-red-500 text-white '>
       {label}
       <img src={iconUrl} alt="icon"
        className='ml-2 rounded-full w-5 h-5' />
    </button>
  )
}

export default Button