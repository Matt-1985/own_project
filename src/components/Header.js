<<<<<<< HEAD
import "./header.css";
import { createElement } from "../utils/elements";

function Header() {
  const headline = createElement("div", {
    innerText: "Kanye says...",
  });

  const header = createElement("header", {
    className: "header",
    children: [headline],
  });
  return header;
}
=======
// import "./header.css";
// import logoSrc from "../assets/logo.png";
// import { createElement } from "../utils/elements";

// function Header() {
//   const logo = createElement("img", {
//     src: logoSrc,
//     alt: "Logo",
//   });

//   const header = createElement("header", {
//     className: "header",
//     children: [logo],
//   });
//   return header;
// }
>>>>>>> master

// export default Header;
