import React, { useContext } from "react";
import Cell from "./Cell";
import { StoreContext } from "../store";
import { ModelContext } from "../model";

const Tr = () => {
  const { firstHour } = useContext(StoreContext);
  const { secondHour } = useContext(StoreContext);
  const { thirdHour } = useContext(StoreContext);
  const { fourthHour } = useContext(StoreContext);
  const { fifthHour } = useContext(StoreContext);
  const { sixthHour } = useContext(StoreContext);
  const { seventhHour } = useContext(StoreContext);
  const { eighthHour } = useContext(StoreContext);

  const { handleChange } = useContext(ModelContext);
  const { writeDB } = useContext(ModelContext);

  return (
    <tbody>
      <tr>
        <td className="hours-title">9:00-10:00</td>
        {firstHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={firstHour}
              whatHourName={"firstHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">10:00-11:00</td>
        {secondHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={secondHour}
              whatHourName={"secondHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">11:00-12:00</td>
        {thirdHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={thirdHour}
              whatHourName={"thirdHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">12:00-13:00</td>
        {fourthHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={fourthHour}
              whatHourName={"fourthHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">13:00-14:00</td>
        {fifthHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={fifthHour}
              whatHourName={"fifthHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">14:00-15:00</td>
        {sixthHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={sixthHour}
              whatHourName={"sixthHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">15:00-16:00</td>
        {seventhHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={seventhHour}
              whatHourName={"seventhHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
      <tr>
        <td className="hours-title">16:00-17:00</td>
        {eighthHour.map((cell, i) => {
          return (
            <Cell
              key={i}
              cell={cell}
              index={i}
              handleChange={handleChange}
              whatHourObj={eighthHour}
              whatHourName={"eighthHour"}
              writeDB={writeDB}
            />
          );
        })}
      </tr>
    </tbody>
  );
};

export default Tr;
