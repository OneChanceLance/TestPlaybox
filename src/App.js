// import { Typography } from "@material-ui/core/Typography";
import { useState } from "react";
import { Selection } from "./ListOfPeople";

function App() {
  const [alignment, setAlignment] = useState("");

  return (
    <div className="App">
      <h1 id="h1" align={alignment} font={"Calibri"}>
        Heading1
      </h1>
      <h2 id="h2" align={alignment}>
        Heading2
      </h2>
      <h3 id="h3" align={alignment}>
        heading3
      </h3>

      <button onClick={() => setAlignment("center")}>Press</button>
    </div>
  );
}

export default function IsInStock() {
  const itemsInStock = Selection.filter((i) => i.amountInStock >= 1);
  const listItems = itemsInStock.map((ix) => (
    <li>
      <p>
        <h2>{ix.itemName}</h2>
        <b>Status: In Stock</b>
      </p>
    </li>
  ));
  return <ul>{listItems}</ul>;
}
