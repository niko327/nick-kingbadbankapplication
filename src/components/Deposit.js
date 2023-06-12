import React, { useContext, useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { BsArrowUpSquareFill } from "react-icons/bs";
import Card, {
  UserContext,
  CurrentAccountContext,
  Transactions,
} from "./Context";

export default function Deposit() {
  const [amount, setAmount] = useState("");

  const ctx = useContext(UserContext);
  const ctxCurrent = useContext(CurrentAccountContext);
  const transactions = useContext(Transactions);

  function handleDeposit() {
    if (isNaN(amount)) return alert("Only numbers allowed.");
    if (amount === "0") return alert("Please enter an amount to deposit.");
    if (amount < 0) return alert("Negative deposits not allowed");
    const listAccount = ctx.users.findIndex(
      (val) => val.email === ctxCurrent.user[0].email
    );
    let i = listAccount;
    let balanceFind = ctxCurrent.user.find(({ name }) => (name = "balance"));
    let x = Number(balanceFind.balance);
    let y = Number(amount);
    let newBalance = x + y;
    ctxCurrent.user[0].balance = newBalance;
    // Add new transaction}
    transactions.transaction.unshift({
      name: ctxCurrent.user[0].name,
      email: ctxCurrent.user[0].email,
      type: "Deposit",
      amount: Number(amount),
      icon: <BsArrowUpSquareFill />,
    });
    ctx.users[i].balance = newBalance;
    setAmount("");
    alert(`Your deposit of $${Number(amount)} was successfully deposited.`);
  }

  return (
    <Card
      body={
        ctxCurrent.user[0].name !== "" ? (
          <div>
            <div className="card mx-auto border-dark bg-dark rounded-2 ">
              <div className="card-header bg-transparent">
                <center>Make a Deposit</center>
              </div>
              <div className="card-body bg-light text-dark rounded-bottom-2">
                <center>
                  Hello {ctxCurrent.user[0].name}, your current balance is:
                </center>
                <h3 className="pb-3">
                  <center>
                    {ctxCurrent.user[0].balance.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </center>
                </h3>
                <div className="input-group mb-3 px-5">
                  <span className="input-group-text">$</span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Amount"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.currentTarget.value)}
                  />
                </div>
                <center>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={handleDeposit}
                    disabled={!amount}
                  >
                    Deposit
                  </button>
                  <br />
                  <br />
                  <div className="fs-6">
                    {!isNaN(amount) && amount ? (
                      <div>
                        <MdCheckCircle style={{ color: "green" }} /> - Must be a
                        number.
                      </div>
                    ) : (
                      <div>
                        <MdCancel style={{ color: "red" }} /> - Must be a
                        number.
                      </div>
                    )}
                    {amount > 0 ? (
                      <div>
                        <MdCheckCircle style={{ color: "green" }} /> - Must be
                        greater than 0.
                      </div>
                    ) : (
                      <div>
                        <MdCancel style={{ color: "red" }} /> - Must be greater
                        than 0.
                      </div>
                    )}
                  </div>
                </center>
              </div>
            </div>
          </div>
        ) : (
          <div className="card mx-auto border-dark bg-dark rounded-2 ">
            <div className="card-header bg-transparent">
              <center>Make a Withdrawl</center>
            </div>
            <div className="card-body bg-light text-dark rounded-bottom-2">
              <h3>
                <center>No Accounts Created</center>
              </h3>
            </div>
          </div>
        )
      }
    />
  );
}
