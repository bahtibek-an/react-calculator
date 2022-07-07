import React, { useState } from "react";
import Output from "./components/Output.js";
import Buttons from "./components/Buttons.js";
import "./style.css";

function Calculator() { 
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '+', '-', '*']
    
    const updateCalc = (value) => {
        if (
            ( ops.includes(value) && !calc ) ||
            ( ops.includes(value) && ops.includes(calc[calc.length - 1]) ) ||
            calc.length === 20 || 
            ( value === '0' && !calc )
        ) { 
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        if(eval(calc) === 0) setCalc('');
        setResult('');
    }

    const deleteAll = () => {
        if(calc){
            setCalc('');
            setResult('');
        }
        return;
    }

    return (
        <div className="calculator-item">
            <Output calc={calc} result={result} />
            <Buttons updateCalc={updateCalc} equal={calculate} deleteOut={deleteAll}/>
        </div>
    );
}

export default Calculator;