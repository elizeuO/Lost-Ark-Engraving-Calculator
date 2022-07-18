import React from "react";
import EngravingItem from "../EngravingItem/builder";

const App = () => {

  const amountEarring = 2;
  const amountRing = 2;
  const amountEngravingBook= 1;
  const amountNecklace = 1;
  const amountAbilityStone= 1;

  return (
    <section className="c-section">

      <div className="c-container">
        <h1>Engraving Calculator</h1>

        <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
          
          <article className="l__col-6">
          <EngravingItem/>
          </article>

          <article className="l__col-6">
          </article>

        </div>

      </div>
    </section>
  );
};

export default App;
