import React from "react";
import ReactDOM from "react-dom";
import TableHead from "./components/TableHead";
import Tr from "./components/Tr";
import "./styles.css";
import Store from "./store";
import BussinessLogic from "./model";

function App() {
  return (
    <div className="App">
      <h1>Расписание</h1>
      <div className="container">
        <table>
          <Store>
            <BussinessLogic>
              <TableHead />
              <Tr />
            </BussinessLogic>
          </Store>
        </table>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
