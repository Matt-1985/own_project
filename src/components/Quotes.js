import "./quotes.css";
import { createElement } from "../utils/elements";

function Quotes({ quote }) {
  const quoteText = createElement("div", {
    className: "quote__text",
    innerText: quote,
  });

  const quoteContainer = createElement("div", {
    className: "quote__container",
    children: [quoteText],
  });

  return quoteContainer;
}

export default Quotes;
