import React from "react";
import "./styles.css"

function Output({ calc, result }) {
    return(
        <div className="output" >
            <div className="previous-operand">
                {result || '0'}
            </div>
            <div className="current-operand">
                { calc || '0' }
            </div>  
        </div>
    );
}

export default Output;