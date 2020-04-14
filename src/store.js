import React, { useState, createContext } from "react";
import { v4 } from "uuid";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [workDays, setWorkDays] = useState([
    // "Пн",
    // "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
  ]);

  const [firstHour, setFirstHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [secondHour, setSecondHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [thirdHour, setThirdHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [fourthHour, setFourthHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [fifthHour, setFifthHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [sixthHour, setSixthHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [seventhHour, setSeventhHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);
  const [eighthHour, setEighthHour] = useState([
    // [{ name: "", id: v4() }],
    // [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  return (
    <StoreContext.Provider
      value={{
        workDays,
        setWorkDays,
        firstHour,
        setFirstHour,
        secondHour,
        setSecondHour,
        thirdHour,
        setThirdHour,
        fourthHour,
        setFourthHour,
        fifthHour,
        setFifthHour,
        sixthHour,
        setSixthHour,
        seventhHour,
        setSeventhHour,
        eighthHour,
        setEighthHour
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default Store;
