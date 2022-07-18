import React from "react";

const EngravingSpec = ()=>{
    return(
        <div
        className="l-flex c-engraving-item__spec js-engraving-item-spec">
        <select
            className="c__transition js-normal-engraving-list js-non-repeatable-engraving"
            type="all" title="Engraving name"></select>
        <input type="number" className="c__transtion js-normal-engraving-value" min="0"
            max="6" value="0" title="Insert the amount of engraving points">
    </div>
    );
}

export default EngravingSpec;