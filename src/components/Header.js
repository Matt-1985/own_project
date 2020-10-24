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

export default Header;
