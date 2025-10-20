import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import SpecialLettersPanel from "./SpecialLettersPannel";
import Grid from "./Grid";

import CARDS from "./cases.json";

function App() {
  const [typedLetter, setTypedLetter] = useState("");
  const [activeCard, setActiveCard] = useState(-99);

  function handleLetterPick(l: string) {
    console.log(l);
    setTypedLetter(l);
  }

  function handleActiveCard(id: number) {
    setActiveCard(id);
  }

  useEffect(() => console.log(activeCard), [activeCard]);

  return (
    <>
      <div className="main">
        <div className="panel">
          <div className="header">1</div>
          <div className="header">2</div>
          <div className="header">3</div>
          <div className="header">4</div>
          <div className="header">5</div>
          <div className="header">6</div>
          <div className="header">7</div>
          {CARDS.map((c) => (
            <Card
              onPick={() => handleActiveCard(c.id)}
              isActive={c.id === activeCard}
              color={c.color}
              key={c.id}
              letter={typedLetter}
              pád={c["pád"]}
              rod={c["rod"]}
              číslo={c["číslo"]}
              model={c["model"]}
              solution={c["solution"]}
              starter={c["starter"]}
            />
          ))}
        </div>

        <SpecialLettersPanel onPick={handleLetterPick}></SpecialLettersPanel>
      </div>
    </>
  );
}

/*
function App() {
  return (
    <>
      <Grid
        rows={["a", "b", "c"]}
        cols={["1", "2", "3", "4", "5", "6", "7"]}
      ></Grid>
    </>
  );
}
*/
export default App;
