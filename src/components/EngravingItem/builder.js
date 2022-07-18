import React from "react";
import './engravingItem.scss';

const EngravingItem = () => {
  return (
    <article className="l__col-6">
      <div className="c-engraving-item  js-engraving-item">
        <h2>Ring 2</h2>

        <div className="l-flex  l-flex--stretch l-flex--wrap l-flex--negative">
          <article className="l__col-3">
            <div className="c-engraving-item__image">
              <img src="/images/icon-ring.webp" />
            </div>
          </article>

          <article className="l__col-9"></article>
        </div>
      </div>
    </article>
  );
};

export default EngravingItem;
