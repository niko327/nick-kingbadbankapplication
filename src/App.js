import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import Withdrawl from "./components/Withdrawl";
import Deposit from "./components/Deposit";
import CreateAccount from "./components/CreatAccount";
import AllData from "./components/AllData";
import { UserContext, CurrentAccountContext, Transactions } from "./components/Context";

export default function App() {
  return (
    <Router>
      <div className="App-header">
        <Navbar />
        <UserContext.Provider
          value={{
            users: [{name:'',email:'',password:'',balance:''}],
          }}
        >
          <CurrentAccountContext.Provider
            value={{
              user: [{name:'',email:'',password:'',balance:''}],
            }}
          >
            <Transactions.Provider
              value={{transaction: []}}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Withdrawl" element={<Withdrawl />} />
              <Route path="Deposit" element={<Deposit />} />
              <Route path="CreateAccount" element={<CreateAccount />} />
              <Route path="AllData" element={<AllData />} />
            </Routes>
            </Transactions.Provider>
          </CurrentAccountContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
