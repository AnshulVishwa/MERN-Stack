import React, { useEffect, useState } from 'react'

function Main() {
    const [filename, setFilename] = useState("")
    const [number_columns, setNumber_columns] = useState(0)
    const [arr, setArr] = useState([]) // Use state for arr to ensure reactivity

    useEffect(() => {
        let newArr = []
        for (let i = 1; i <= number_columns; i++) {
            newArr[i - 1] = i
        }
        setArr(newArr) // Update the arr state
    }, [number_columns])

    return (
        <>
            <div className="filename flex">
                <label htmlFor="filename">Filename : </label>
                <input
                    id='filename'
                    type="text"
                    className='inputFilename'
                    name='filename'
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                />
            </div>
            <div className="columns flex">
                <label htmlFor="columns">Number of Columns : </label>
                <input
                    id='columns'
                    type="number"
                    className='number_columns'
                    name='number_columns'
                    value={number_columns}
                    onChange={(e) => setNumber_columns(Number(e.target.value))} // Convert to number
                />
            </div>
            <div className="headingDiv flex">
                {arr.length !== 0 &&
                    arr.map((v) => (
                        <div key={v} className="heading flex">
                            <label htmlFor={`heading${v}`}> Heading {v} </label>
                            <input
                                type="text"
                                id={`heading${v}`}
                            />
                        </div>
                    ))
                }
            </div>
            {/* <div className="rowDiv">
                {arr.length !== 0 &&
                    arr.map((v) => (
                        <div key={v} className="row">
                            <label htmlFor={`row${v}`}> row{v} </label>
                            <input
                                type="text"
                                id={`row${v}`}
                            />
                        </div>
                    ))
                }
            </div> */}
        </>
    )
}

export default Main
