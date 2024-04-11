import './Exam.css'

import { useState } from 'react'

const Exam = () => {

    const [calData, setCalData] = useState([]);
    const [result, setResult] = useState("");
    const [selectOption, setSelectoption] = useState("");

    const Left_Change = (e) => {
        const L_value = e.target.value

        setCalData({
            ...calData,
            L_value
        })
    }

    const Right_Change = (e) => {
        const R_value = e.target.value

        setCalData({
            ...calData,
            R_value
        })
    }
    console.log(calData)

    const selectChange = (e) => {
        setSelectoption(e.target.value)
    }

    const onClick = () => {
        if (selectOption === "plus") {
            setResult(Number(calData["L_value"]) + Number(calData["R_value"]))
        } else if (
            selectOption === "minus"
        ) {
            setResult(Number(calData["L_value"]) - Number(calData["R_value"]))
        } else if (
            selectOption === "multiply"
        ) {
            setResult(Number(calData["L_value"]) * Number(calData["R_value"]))
        } else if (
            selectOption === "divide" // && "R_value" !== "L_value"
        ) {
            setResult(Number(calData["L_value"]) / Number(calData["R_value"]))
        }

    }


    return (
        <div className="Cal">
            <div>
                <input type="text" name="left_value" onChange={Left_Change} />
            </div>

            <select onChange={selectChange}>
                <option value="plus">+</option>
                <option value="minus">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select>

            <input type="text" name="right_value" onChange={Right_Change} />

            <button onClick={onClick}>=</button>

            <div>{result}</div>
        </div >
    )
}

export default Exam;