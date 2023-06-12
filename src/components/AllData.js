import React, { useContext } from "react";
import { UserContext, CurrentAccountContext, Transactions } from "./Context";
import { ListGroup, ListGroupItem } from "reactstrap";

export default function AllData() {
  const ctx = useContext(UserContext);
  const ctxCurrent = useContext(CurrentAccountContext);
  const transactions = useContext(Transactions);

  return (
    <div>
      <h3 className="ps-4 pt-4">Accounts</h3>
      {ctxCurrent.user[0].name !== "" ? (
        <ListGroup className="w-75">
          {ctx.users.map((item) => (
            <ListGroupItem className="list-group-item-info" key={item.email}>
              <div className="py-2 fs-5">
                <span class="bg-transparent rounded-pill position-absolute top-50 translate-middle-y">
                  Account: {item.name}
                </span>
                <span class="position-absolute top-50 start-50 translate-middle-y">
                  Type: {item.email}
                </span>
                <span class="position-absolute top-50 end-0 translate-middle-y">
                  Balance:{" "}
                  {item.balance.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <ListGroup className="px-4 w-50">
          <ListGroupItem className="list-group-item-info">
            <div className="py-2 fs-5">No Accounts Created</div>
          </ListGroupItem>
        </ListGroup>
      )}

      <h3 className="ps-4 pt-4">Transactions</h3>
      {ctxCurrent.user[0].name !== "" ? (
        <ListGroup className="w-75">
          {transactions.transaction.map((item) => (
            <ListGroupItem className="list-group-item-info" key={item.email}>
              <div className="py-2 fs-5">
                <span class="position-absolute top-50 translate-middle-y">
                  Account: {item.name}
                </span>
                <span class="position-absolute top-50 start-50 translate-middle-y">
                  Type: {item.type}
                </span>
                <span class="position-absolute top-50 end-0 translate-middle-y">
                  {item.icon}{" "}
                  {item.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      ) : (
        <ListGroup className="px-4 w-50">
          <ListGroupItem className="list-group-item-info">
            <div className="py-2 fs-5">No Transactions Recorded</div>
          </ListGroupItem>
        </ListGroup>
      )}
    </div>
  );
}
