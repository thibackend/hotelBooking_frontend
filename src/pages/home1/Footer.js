// import styles from "../style";
// import { logo } from "../assets";
// import { footerLinks, socialMedia } from "../constants";

// const Footer = () => (
//   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
//     <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//       <div className="flex-[1] flex flex-col justify-start mr-10">
//         <img
//           src={logo}
//           alt="hoobank"
//           className="w-[266px] h-[72.14px] object-contain"
//         />
//         <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
//           A new way to make the payments easy, reliable and secure.
//         </p>
//       </div>

//       <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
//         {footerLinks.map((footerlink) => (
//           <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
//             <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
//               {footerlink.title}
//             </h4>
//             <ul className="list-none mt-4">
//               {footerlink.links.map((link, index) => (
//                 <li
//                   key={link.name}
//                   className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
//                     index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
//                   }`}
//                 >
//                   {link.name}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
//       <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
//         Copyright Ⓒ 2022 HooBank. All Rights Reserved.
//       </p>

//       <div className="flex flex-row md:mt-0 mt-6">
//         {socialMedia.map((social, index) => (
//           <img
//             key={social.id}
//             src={social.icon}
//             alt={social.id}
//             className={`w-[21px] h-[21px] object-contain cursor-pointer ${
//               index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
//             }`}
//             onClick={() => window.open(social.link)}
//           />
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Footer;



import React from "react"
// import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Bonik</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>70 Washington Square South, New York, NY 10012, United States </li>
              <li>Email: uilib.help@gmail.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer