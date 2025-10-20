import { useState, useEffect } from "react";

const specialLetters = ["ě", "š", "č", "ř", "ž", "ý", "á", "í", "é", "ú", "ů"];

function Letter({
  letter,
  onPick,
}: {
  letter: string;
  onPick: (l: string) => any;
}) {
  return (
    <button
      className="letter"
      value={letter}
      type="button"
      onClick={() => onPick(letter)}
    >
      {letter}
    </button>
  );
}

function SpecialLettersPanel({ onPick }: { onPick: (letter: string) => void }) {
  return (
    <div className="special-letters-pannel">
      {specialLetters.map((l) => (
        <Letter key={l} letter={l} onPick={onPick}></Letter>
      ))}
    </div>
  );
}

export default SpecialLettersPanel;
