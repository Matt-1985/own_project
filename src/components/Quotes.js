import "./quotes.css";
import { createElement } from "../utils/elements";
<<<<<<< HEAD

function Quotes({ quote }) {
  const quoteText = createElement("div", {
    className: "quote__text",
    innerText: quote,
  });

  return quoteText;
=======
import imgSrc from "../assets/tv.png";

function Quotes() {
  const quoteDisplay = createElement("img", {
    className: "quote__display",
    src: imgSrc,
  });
  const quoteText = createElement("section", {
    className: "quote__text",
    // innerText: quote,
  });
  const quoteContainer = createElement("div", {
    className: "quote__container",
    children: [quoteDisplay, quoteText],
  });

  return quoteContainer;
>>>>>>> master
}

export default Quotes;
