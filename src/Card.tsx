import { useState, useEffect } from "react";

function Card({
  letter,
  pád,
  rod,
  číslo,
  model,
  solution,
  starter,
  color,
  onPick,
  isActive,
}: {
  letter: string;
  pád: string;
  rod: string;
  číslo: string;
  model: string;
  solution: string | Array<string>;
  starter: string;
  color: string;
  onPick: () => void;
  isActive: boolean;
}) {
  const [face, setFace] = useState(true);
  const [ans, setAns] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  function flip() {
    setFace(!face);
  }

  function handleTyping(e: any) {
    setAns(e.target.value);
    const t = typeof solution;

    if (t === "string") {
      e.target.value === solution ? setIsCorrect(true) : setIsCorrect(false);
      return;
    }
    solution.includes(e.target.value)
      ? setIsCorrect(true)
      : setIsCorrect(false);
  }

  function giveSolution() {
    const t = typeof solution;
    if (t === "string") {
      return solution;
    } else if (Array.isArray(solution)) {
      return solution.join(" / ");
    } else {
      return "";
    }
  }

  useEffect(() => {
    if (letter && isActive) setAns((prev) => prev + letter);
  }, [letter]);
  useEffect(() => console.log(ans), [ans]);

  if (!face) {
    return (
      <div className="card solution" onClick={flip}>
        {giveSolution()}
      </div>
    );
  }

  return (
    <>
      <div className="card" style={{ backgroundColor: color }}>
        <div className="info" onClick={flip}>
          <h1>{model}</h1>
          <br></br>
          <h3> ---------------------------------</h3>
          <br></br>
          <h3>{rod}</h3>
          <h3>{číslo}</h3>
          <h3>{pád}</h3>
        </div>
        <div className="input">
          <form>
            <input
              type="text"
              onChange={(e) => handleTyping(e)}
              onClick={onPick}
              style={
                isCorrect
                  ? { backgroundColor: "#9ab973" }
                  : { backgroundColor: "white" }
              }
              value={ans}
              placeholder={starter}
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Card;
