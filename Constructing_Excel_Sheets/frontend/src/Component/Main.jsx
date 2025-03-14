import React, { useEffect, useState } from 'react'
import "./Styles/main.css"
import axios from "axios"

function Main() {
    const [filename, setFilename] = useState("")
    const [number_columns, setNumber_columns] = useState(1)
    const [arr, setArr] = useState([])
    const [rowNum, setRowNum] = useState([])

    const [rows, setRows] = useState([{ row: 1, value: { heading1: "" } }])

    // Update `arr` whenever `number_columns` changes
    useEffect(() => {
        setArr(Array.from({ length: number_columns }, (_, i) => i + 1));
    }, [number_columns]);

    // Handle row & column updates
    useEffect(() => {
        // Add new row if needed
        if (rowNum.length !== 1 && rows.length < rowNum.length) {
            const newDoc = { row: rowNum.length, value: {} };
            arr.forEach((v) => {
                newDoc.value[`heading${v}`] = "";
            });
            setRows((prevRows) => [...prevRows, newDoc]);
        }

        // Add new column if needed
        if (Object.keys(rows[0].value).length !== number_columns) {
            setRows((prev) =>
                prev.map((v) => ({
                    ...v,
                    value: {
                        ...v.value,
                        [`heading${number_columns}`]: "",
                    },
                }))
            );
        }
    }, [number_columns, rowNum]);

    // Handle value insertion without mutating state
    function handleInsertValues(rowIndex, columnIndex, value) {
        setRows((prev) =>
            prev.map((row, i) =>
                i === rowIndex
                    ? {
                          ...row,
                          value: {
                              ...row.value,
                              [`heading${columnIndex + 1}`]: value,
                          },
                      }
                    : row
            )
        );
    }

    async function handleSubmit(e){
        e.preventDefault()
        const response = await axios.post( "http://localhost:5000/data" , rows )
        if( response ){
            alert(response.data.msg)
        }
        alert("Submitted")
    }

    return (
        <>
            <div className="filename flex">
                <label htmlFor="filename">Filename: </label>
                <input
                    id="filename"
                    type="text"
                    className="inputFilename"
                    name="filename"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                />
            </div>

            <div className="columns flex">
                <label htmlFor="columns">Number of Columns: </label>
                <input
                    id="columns"
                    type="number"
                    className="number_columns"
                    min={1}
                    max={10}
                    name="number_columns"
                    value={number_columns}
                    onChange={(e) => setNumber_columns(Number(e.target.value))}
                />
            </div>

            <div className="headingDiv flex">
                {arr.map((v) => (
                    <div key={v} className="heading flex">
                        <label htmlFor={`heading${v}`}> Heading {v} </label>
                        <input type="text" id={`heading${v}`} />
                    </div>
                ))}
            </div>

            {rowNum.map((row) => (
                <div key={row} className="rowDiv">
                    <span className='span-row'>Row {row}</span>
                    {arr.map((v) => (
                        <div key={v} className="row">
                            <input
                                type="text"
                                id={`row${v}`}
                                onChange={(e) => handleInsertValues(row - 1, v - 1, e.target.value)}
                                value={rows[row - 1]?.value[`heading${v}`] || ""}
                            />
                        </div>
                    ))}
                </div>
            ))}

            <div
                onClick={() => setRowNum((prev) => [...prev, prev.length + 1])}
                className="addRow flex"
            >
                <i className="fa-solid fa-plus"></i>
                <span>New row</span>
            </div>
            <button onClick={handleSubmit} className="button flex">
                Convert
            </button>
        </>
    );
}

export default Main;
