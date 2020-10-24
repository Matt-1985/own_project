import "./quotes.css";
import { createElement } from "../utils/elements";

function Quotes({ quote }) {
  const quoteText = createElement("div", {
    className: "quote__text",
    innerText: quote,
  });

  return quoteText;
}

export default Quotes;
