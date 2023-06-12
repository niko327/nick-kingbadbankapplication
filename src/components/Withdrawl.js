import React, { useContext, useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { BsArrowDownSquareFill } from "react-icons/bs";
import Card, {
  UserContext,
  CurrentAccountContext,
  Transactions,
} from "./Context";

export default function Withdrawl() {
  const [amount, setAmount] = useState("");

  const ctx = useContext(UserContext);
  const ctxCurrent = useContext(CurrentAccountContext);
  const transactions = useContext(Transactions);

  function handleWithdrawl() {
    let balanceFind = ctxCurrent.user.find(({ name }) => (name = "balance"));
    if (isNaN(amount)) return alert("Only numbers allowed.");
    if (amount === "0") return alert("Please enter an amount to withdrawl.");
    if (amount < 0) return alert("Negative withdrawls not allowed");
    if (amount > balanceFind.balance) return alert("Insufficient Funds.");
    const listAccount = ctx.users.findIndex(
      (val) => val.email === ctxCurrent.user[0].email
    );
    let i = listAccount;
    let x = Number(balanceFind.balance);
    let y = amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    let newBalance = x - y;
    ctxCurrent.user[0].balance = newBalance;
    // Add new transaction}
    transactions.transaction.unshift({
      name: ctxCurrent.user[0].name,
      email: ctxCurrent.user[0].email,
      type: "Withdrawl",
      amount: Number(amount),
      icon: <BsArrowDownSquareFill />,
    });
    ctx.users[i].balance = newBalance;
    alert(`Your successfuly withdrew $${amount}`);
    setAmount("");
  }

  return (
    <Card
      body={
        ctxCurrent.user[0].name !== "" ? (
          <div>
            <div className="card mx-auto border-dark bg-dark rounded-2 ">
              <div className="card-header bg-transparent">
                <center>Make a Withdrawl</center>
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
                    onClick={handleWithdrawl}
                    disabled={!amount}
                  >
                    Withdrawl
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
                    {amount <= ctxCurrent.user[0].balance &&
                    !isNaN(amount) &&
                    amount ? (
                      <div>
                        <MdCheckCircle style={{ color: "green" }} /> - Must have
                        sufficient funds.
                      </div>
                    ) : (
                      <div>
                        <MdCancel style={{ color: "red" }} /> - Must have
                        sufficient funds.
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
