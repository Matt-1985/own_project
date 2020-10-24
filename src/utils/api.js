export async function getRandomQuotes() {
  const url = `https://api.kanye.rest`;
  const response = await fetch(url);
  const quote = await response.json();

  return quote;
}
