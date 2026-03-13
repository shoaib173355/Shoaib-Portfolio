// import {
//   FaGithub,
//   FaInstagram,
//   FaLinkedinIn,
//   FaXTwitter,
// } from "react-icons/fa6";
// import "./styles/SocialIcons.css";
// import { TbNotes } from "react-icons/tb";
// import { useEffect } from "react";
// import HoverLinks from "./HoverLinks";

 
// const SocialIcons = () => {
//   useEffect(() => {
//     const social = document.getElementById("social");

//     if (!social) return;

//     social.querySelectorAll("span").forEach((item) => {
//       const elem = item;
//       const link = elem.querySelector("a");

//       if (!link) return;

//       const rect = elem.getBoundingClientRect();
//       let mouseX = rect.width / 2;
//       let mouseY = rect.height / 2;
//       let currentX = 0;
//       let currentY = 0;

//       const updatePosition = () => {
//         currentX += (mouseX - currentX) * 0.1;
//         currentY += (mouseY - currentY) * 0.1;

//         link.style.setProperty("--siLeft", `${currentX}px`);
//         link.style.setProperty("--siTop", `${currentY}px`);

//         requestAnimationFrame(updatePosition);
//       };

//       const onMouseMove = (e) => {
//         const x = e.clientX - rect.left;
//         const y = e.clientY - rect.top;

//         if (x < 40 && x > 10 && y < 40 && y > 5) {
//           mouseX = x;
//           mouseY = y;
//         } else {
//           mouseX = rect.width / 2;
//           mouseY = rect.height / 2;
//         }
//       };

//       document.addEventListener("mousemove", onMouseMove);

//       updatePosition();
//     });
//   }, []);

//   return (
//     <div className="icons-section">
//       <div className="social-icons" data-cursor="icons" id="social">
//         <span>
//           <a href="https://github.com/shoaib173355" target="_blank">
//             <FaGithub />
//           </a>
//         </span>

//         <span>
//           <a href="https://www.linkedin.com/in/mohammed-shoaib-shaik-4b4ba9190/" target="_blank">
//             <FaLinkedinIn />
//           </a>
//         </span>

//         <span>
//           <a href="https://x.com/shoaieb901" target="_blank">
//             <FaXTwitter />
//           </a>
//         </span>

//         <span>
//           <a href="#">
//             <FaInstagram />
//           </a>
//         </span>
//       </div>

//       <a
//   className="resume-button"
//   href="/Mohammed_Shoaib_Resume.pdf"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <HoverLinks text="RESUME" />
//   <span>
//     <TbNotes />
//   </span>
// </a>
//     </div>
//   );
// };

// export default SocialIcons;

import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useState } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>
      <div className="icons-section">
        <div className="social-icons">
          <span>
            <a href="https://github.com" target="_blank">
              <FaGithub />
            </a>
          </span>

          <span>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </span>

          <span>
            <a href="https://x.com" target="_blank">
              <FaXTwitter />
            </a>
          </span>

          <span>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </span>
        </div>

        <button
          className="resume-button"
          onClick={() => setShowResume(true)}
        >
          <HoverLinks text="RESUME" />
          <span>
            <TbNotes />
          </span>
        </button>
      </div>

      {showResume && (
        <div className="resume-modal">
          <div className="resume-container">
            <button
              className="resume-close"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src="/Mohammed_Shoaib_Resume.pdf"
              width="100%"
              height="100%"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SocialIcons;