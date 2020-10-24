import "./app.css";
import Button from "./components/Button";
import Header from "./components/Header";
import { createElement, styled } from "./utils/elements";
import Quotes from "./components/Quotes";
import { getRandomQuotes } from "./utils/api";

const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const header = Header();
  // const quotes = Quotes();

  const moreButton = PrimaryButton({
    innerText: "Give me more Kanye",
    onclick: () => {
      moreKanye();
    },
  });

  const main = createElement("main", {
    className: "main",
    children: [header, moreButton],
  });

  async function moreKanye() {
    const allQuotes = await getRandomQuotes();
    let quote = Quotes({
      quote: allQuotes.quote,
    });

    main.innerHTML = "";
    main.append(moreButton);
    main.append(quote);
  }

  getRandomQuotes();

  const container = createElement("div", {
    children: [header, main],
  });
  return container;
}

export default App;
