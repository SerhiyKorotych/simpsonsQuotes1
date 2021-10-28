import React from "react";
import axios from "axios";
import DisplayQuote from "./components/DisplayQuote";

const firstQuote = "Doh";

function App() {
  const [quote, setQuote] = React.useState(firstQuote);

  const getSimpsonsQuote = () => {
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setQuote(data[0]);
      });
  };

  return (
    <div>
      <DisplayQuote quote={quote} />
      <button type="button" onClick={getSimpsonsQuote}>
        {" "}
        Quotes
      </button>
    </div>
  );
}

export default App;

