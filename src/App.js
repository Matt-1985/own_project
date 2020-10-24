import "./app.css";
// import Button from "./components/Button";
// import Header from "./components/Header";
import { createElement } from "./utils/elements";
import Quotes from "./components/Quotes";

// const PrimaryButton = styled(Button, "bg-primary");

function App() {
  const quotes = Quotes();

  const main = createElement("main", {
    className: "main",
    children: [quotes],
  });

  async function getRandomQuotes() {
    const allQuotes = await getRandomQuotes();
    const newQuotes = allQuotes.map((kanye) =>
      Quotes({
        quote: kanye.quote,
      })
    );
    main.innerHTML = "";
    main.append(...newQuotes);
  }

  getRandomQuotes();

  const container = createElement("div", {
    children: [main],
  });

  return container;
}

export default App;
