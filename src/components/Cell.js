import React from "react";

const Cell = ({
  cell,
  index,
  handleChange,
  whatHourObj,
  whatHourName,
  writeDB
}) => {
  return (
    <td key={index}>
      {cell.map((it, i) => (
        <input
          key={i}
          name={it.name}
          type="text"
          onFocus={e => {
            e.target.select();
          }}
          onBlur={() => writeDB(whatHourObj, whatHourName)}
          onChange={e => {
            const inputText = e.target.value;
            handleChange(e, it.id, whatHourObj, whatHourName, inputText);
          }}
          value={it.name}
        />
      ))}
      {/* {console.log("here comes cell", cell)} */}
    </td>
  );
};

export default Cell;
