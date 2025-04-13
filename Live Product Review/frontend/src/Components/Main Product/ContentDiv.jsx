import React, { useEffect, useState } from 'react';
import "./MainProduct.css"

function ContentDiv( {data} ) {
    return (
        <div className="mainContentDiv-MainP flex">
            <div className="innerMainPDiv flex">
                <div className="detailsMoreMain-P flex">
                    <img src="/blob.svg" alt="" className="BackNameImageMainP" />
                    <div className="nameCompanyDes flex">
                        <div className="nameMainP">{data.name}</div>
                        <div className="companyMainP">{data.company}</div>
                        <div className="descriptionMainP">{data.description}</div>
                    </div>
                </div>
                <div className="MainP-productImage flex">
                    <img className='ProductImageMainP' src={data.image} alt={data.name} />
                </div>
            </div>
        </div>
    );
}

export default ContentDiv;
