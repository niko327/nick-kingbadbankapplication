import React, { useContext, useState } from "react";
import Card, {
  CurrentAccountContext,
  UserContext,
  Transactions,
} from "./Context";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { MdCancel, MdCheckCircle } from "react-icons/md";

export default function CreateAccount() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ctx = useContext(UserContext);
  const ctxCurrent = useContext(CurrentAccountContext);
  const transactions = useContext(Transactions);

  function validate(field, label) {
    if (!field) {
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return alert("Please enter a name.");
    if (!validate(email, "email")) return alert("Please enter your email.");
    if (!password || password.length < 8)
      return alert("Password must be more than 8 characters.");
    // Add new Account to list
    if (ctx.users[0].name === "") {
      ctx.users.pop();
      ctx.users.unshift({ name, email, password, balance: 100 });
    } else {
      ctx.users.push({ name, email, password, balance: 100 });
    }

    // Add new transaction
    transactions.transaction.unshift({
      name,
      email,
      type: "New Account",
      amount: Number(100),
      icon: <BsArrowUpSquareFill />,
    });
    // set Account created to current
    ctxCurrent.user.shift();
    ctxCurrent.user.push({ name, email, password, balance: 100 });
    console.log(ctx.users.length);
    alert(`Thanks ${name}, your account has been sucessfully created.`);
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      body={
        show ? (
          <div>
            <div className="card mx-auto border-dark bg-dark rounded-2 ">
              <div className="card-header bg-transparent">
                <center>Create Account</center>
              </div>
              <div className="card-body bg-light text-dark rounded-bottom-2">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="input"
                    className="form-control"
                    placeholder="Enter Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="input"
                    className="form-control"
                    placeholder="Enter Email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <div className="fs-6">
                  {!password || password.length < 8 ? (
                    <div>
                      <MdCancel style={{ color: "red" }} /> - Password must be
                      more than 8 characters.
                    </div>
                  ) : (
                    <div>
                      <MdCheckCircle style={{ color: "green" }} /> - Password must be
                      more than 8 characters.
                    </div>
                  )}
                </div>
                <br/>
                <center>
                  <button
                    id="createaccountbtn"
                    type="submit"
                    className="btn btn-dark"
                    onClick={handleCreate}
                  >
                    Create Account
                  </button>
                </center>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="card mx-auto border-dark bg-dark rounded-2 ">
              <div className="card-header bg-dark">
                <center>Create Account</center>
              </div>
              <div className="card-body bg-light text-dark rounded-bottom-2">
                <div className="mb-3">
                  <center>
                    <h2>Success!</h2>
                    <br />
                    <button
                      type="submit"
                      className="btn btn-dark"
                      onClick={clearForm}
                    >
                      Add Another Account
                    </button>
                    <br />
                  </center>
                </div>
              </div>
            </div>
          </div>
        )
      }
    />
  );
}
