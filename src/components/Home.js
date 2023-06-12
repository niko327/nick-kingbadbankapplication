import Card from "./Context";

export function Home() {

  return (
    <Card
      body=
        <div className="card mx-auto border-dark bg-dark rounded-2 ">
          <div className="card-header bg-transparent">
            <center>
              <h3>Welcome to Bad Bank!!</h3>
            </center>
          </div>
          <div className="card-body bg-light text-dark rounded-bottom-2">
            <center>
          <img className="pb-4" src="BadBank.png" alt="" width="300px" />
            <br/>
              <p className="fs-6 px-5">
                Welcome to Bad Bank, where we promise to make your
                financial situation worse than a day-old burrito! But don't
                worry, we're not ALL bad. We do offer a free lollipop with every
                declined transaction, so at least you'll have something sweet to
                eat while you cry about your dwindling bank account. And if
                you're lucky, our broken ATM might just give you a few extra
                bucks (although we can't promise they won't be in Monopoly
                money). So sit back, relax, and let us help you lose all your
                hard-earned cash with a smile
              </p>
            </center>
          </div>
        </div>
    />
  );
}
