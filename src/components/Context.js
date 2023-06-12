import { createContext } from "react";

export const UserContext = createContext(null);
export const CurrentAccountContext = createContext(null);
export const Transactions = createContext(null);

export default function Card(props) {
  return (
    <div className="App-CreateAccount">
      {props.body}
    </div>
  );
}
