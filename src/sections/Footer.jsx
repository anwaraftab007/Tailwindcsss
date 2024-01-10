import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
     <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="mt-6 leading-7 text-white sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
        <div className="flex items-center gap-5 mt-8">
          {socialMedia.map((icon) => (
             <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
             <img src={icon.src} alt="social icon" 
             width={24} height={24} />
           </div>
          ))}
        </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap text-white">
          {footerLinks.map((section) => (
            <div key={section}>
              <h3 className="text-2xl leading-normal mb-6">
                {section.title}
              </h3>
              <ul>
                {section.links.map((link) => (
                   <li  className="mt-3 leading-normal hover:text-gray-400 cursor-pointer" key={link.name}>
                   <a href="/">{link.name}</a>
                 </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
             <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
             <img src={copyrightSign} alt="copyright sign" width={24} height={24}className="rounded-full m-0" />  
             <p>Copyright . All rights reserved.</p>
            </div> 
            <p className="cursor-pointer">Terms and Condition</p>    
      </div>
     </footer>
  )
}

export default Footer