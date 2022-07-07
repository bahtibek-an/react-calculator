import React from "react";
import "./styles.css"

function Buttons({ updateCalc, equal, deleteOut}) {
    return(
        <div className="buttons" >
            <div className="row" >
                <button onClick={() => updateCalc('1')} >1</button>
                <button onClick={() => updateCalc('2')} >2</button>
                <button onClick={() => updateCalc('3')} >3</button>
                <button className="btn-secondary" onClick={() => updateCalc('+')} >+</button>
            </div>
            <div className="row" >
                <button onClick={() => updateCalc('4')} >4</button>
                <button onClick={() => updateCalc('5')} >5</button>
                <button onClick={() => updateCalc('6')} >6</button>
                <button className="btn-secondary" onClick={() => updateCalc('-')} >-</button>
            </div>
            <div className="row" >
                <button onClick={() => updateCalc('7')} >7</button>
                <button onClick={() => updateCalc('8')} >8</button>
                <button onClick={() => updateCalc('9')} >9</button>
                <button className="btn-secondary" onClick={() => updateCalc('*')} >*</button>
            </div>
            <div className="row" >
                <button onClick={deleteOut} style={{borderBottomLeftRadius: "5px"}} >C</button>
                <button onClick={() => updateCalc('0')} >0</button>
                <button className="btn-equal" onClick={equal} >=</button>
                <button className="btn-secondary" onClick={() => updateCalc('/')} style={{borderBottomRightRadius: "5px"}} >/</button>
            </div>
        </div>
    );
}

export default Buttons;