import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import AllProducts from "../Products/AllProducts.json";
import "./MainProduct.css"

function ContentDiv() {
    const { productName } = useParams();
    const [data, setData] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const product = AllProducts.find((v) => v.name === productName);
        setData(product || null);
        setLoad(false);
    }, [productName]);

    return (
        <div className="mainContentDiv-MainP flex">
            {load && <div className="loader"></div>}

            {!load && data && (
                <>
                    <div className="detailsMoreMain-P">
                        <img src="/blob.svg" alt="" className="BackNameImageMainP" />
                        <div className="nameCompanyDes">
                            <div className="nameMainP">{data.name}</div>
                            <div className="companyMainP">{data.company}</div>
                            <div className="descriptionMainP">{data.description}</div>
                        </div>
                    </div>
                    <div className="MainP-productImage">
                        <img className='ProductImageMainP' src={data.image} alt={data.name} />
                    </div>
                </>
            )}

            {!load && !data && (window.location.href = "/404Err")}
        </div>
    );
}

export default ContentDiv;
