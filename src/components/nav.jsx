import { hamburger } from "../assets/icons"
import { navLinks } from "../constants"
import { headerLogo } from "../assets/images"
import { useState } from 'react'



const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const Menu = ({isOpen}) => {
    return (
      <div className="container relative m-auto p-3 flex justify-between items-center max-lg:top-9">
      <ul className={`lg:flex-1 lg:flex lg:justify-center items-center gap-16 max-lg:grid max-lg:grid-cols-1 max-lg:bg-red-500 max-lg:text-white max-lg:p-7`}>
    {navLinks.map((item) => (
      <li key={item.label}>
        <a href={item.href}
        className="block max-lg:inline-block font-montserrat leading-normal text-lg text-slate-gray">
          {item.label}
        </a>
      </li>
    ))}
  </ul></div>
    
    )
  }
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="max-lg:relative flex justify-between max-lg:justify-end items-center max-container">
          <a className="max-lg:absolute max-lg:left-0 max-lg:top-1" href="#">
           <img src={headerLogo} alt="Nike logo" width={130} height={29}/>
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray">
                  {item.label}
                </a>
              </li>   
            ))}
          </ul>
          <div className="">
          <button
         onClick={toggleNavbar}
         className="flex items-center px-3 py-2 rounded-full text-black-500 hover:text-black-400 max-lg:absolute max-lg:right-0 max-lg:top-1 lg:hidden" >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
           style={{ width: "24", height: "24" }}>
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg" style={{ width: "24", height: "24" }}
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
        {isOpen && <Menu isOpen={isOpen}/> }
      </div>
     
        </nav>
    </header>
  )
}

export default Nav