function getCoordinates(rows: Array<string>, cols: Array<string>) {
  return rows.map((r) =>
    cols.map((c) => ({ row: r, col: c, area: r + "_" + c }))
  );
}

export default function Grid({
  rows,
  cols,
}: {
  rows: Array<string>;
  cols: Array<string>;
}) {
  const coordinates = getCoordinates(rows, cols);
  const areas = coordinates
    .map((row) => '"' + row.map((cell) => cell["area"]).join(" ") + '"')
    .join("\n");

  const elements = coordinates.map((x) => x.map((y) => y["area"])).flat();
  console.log(elements);

  return (
    <>
      <div style={{ display: "grid", gridTemplateAreas: areas }}>
        {elements.map((x) => (
          <p
            key={x}
            style={{ gridArea: x, color: "white", border: "1px solid white" }}
          >
            {x}
          </p>
        ))}
      </div>
    </>
  );
}
