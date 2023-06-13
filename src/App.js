// import { Typography } from "@material-ui/core/Typography";
import { useState } from "react";
import { Selection } from "./ListOfItems";

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
  const itemsOutOfStock = Selection.filter((i) => i.amountInStock == 0);
  const listItemsInStock = itemsInStock.map((ix) => (
      <p>
       <h2 align={"center"}>{ix.itemName}</h2>
        <b align={"center"}>Status: In Stock</b>
      </p>
 ));
  const listItemsNotInStock = itemsOutOfStock.map((ix) => (
     <p>
       <h2 align={"center"}>{ix.itemName}</h2>
        <b align={"center"} type="color" value="#FF0000">Status: Out Of Stock</b>
      </p>
  ));
 // const [nameOfItem, stockStatus] = {(nameOfItem => Selection.itemName)} {stockStatus => {
  //  if (Selection.amountInStock >= 1) {
    //  stockStatus = "In Stock"
  //    }
  //  else {
   //   stockStatus = "Out Of Stock"
  //  }
 // }
 //   <li>
  //    <p>
  //     <h2>{i.itemName}</h2>
 //    </p>
  //  </li>
 // );
  return (
    <div>
      <ul>{listItemsInStock}</ul>
      <ul>{listItemsNotInStock}</ul>
    </div>
    );
}
