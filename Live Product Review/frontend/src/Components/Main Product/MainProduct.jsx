import React, { useEffect, useRef, useState } from 'react';
import "./MainProduct.css";
import ContentDiv from './ContentDiv';
import ChartOverview from './ChartOverview';
import { useParams } from "react-router-dom";
import AllProducts from "../Products/AllProducts.json";
import OverviewDetails from './OverviewDetails';

function MainProduct() {
  const { productName } = useParams();
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(true);
  const [showChart, setShowChart] = useState(false);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const product = AllProducts.find((v) => v.name === productName);
    setData(product || null);
    setLoad(false);
  }, [productName]);

  useEffect(() => {
    if (!data || !chartContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.target == chartContainerRef.current) {
          setShowChart(true);
        }
        else{
          setShowChart(false)
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(chartContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [data]);

  return (
    <div className='MainDivProductChartOverview'>
      <div className="mainProductDivMain-P flex">
        {load && <div className="loader"></div>}

        <div className="navbar-MainP flex">
          <span>Product Details</span>
          <svg
            onClick={() => {
              window.location.href = "/";
            }}
            className='backButtonMain-P'
            width="29"
            height="30"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.125 6.62502C15.125 6.32168 14.9423 6.0482 14.662 5.93211C14.3818 5.81603 14.0592 5.88019 13.8447 6.09469L7.59467 12.3447C7.30178 12.6376 7.30178 13.1125 7.59467 13.4054L13.8447 19.6554C14.0592 19.8699 14.3818 19.934 14.662 19.8179C14.9423 19.7018 15.125 19.4284 15.125 19.125V6.62502Z"
              fill="#000000"
            />
          </svg>
        </div>

        {!load && data && <ContentDiv data={data} />}
        {!load && !data && (window.location.href = "/404Err")}

        <footer className="FooterMainP flex">
          <h3>{data?.rating} Rating Product</h3>
          <svg
            className="downArrowHomeFooter"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5.75002 6.75C5.44668 6.75 5.1732 6.93273 5.05711 7.21299C4.94103 7.49324 5.00519 7.81583 5.21969 8.03033L11.4697 14.2803C11.6103 14.421 11.8011 14.5 12 14.5C12.1989 14.5 12.3897 14.421 12.5304 14.2803L18.7804 8.03033C18.9949 7.81583 19.059 7.49324 18.9429 7.21299C18.8268 6.93273 18.5534 6.75 18.25 6.75H5.75002Z" fill="#323544"></path>
            <path d="M18.7804 12.5303C19.0732 12.2374 19.0732 11.7626 18.7804 11.4697C18.4875 11.1768 18.0126 11.1768 17.7197 11.4697L12 17.1893L6.28035 11.4697C5.98746 11.1768 5.51258 11.1768 5.21969 11.4697C4.9268 11.7626 4.9268 12.2374 5.21969 12.5303L11.4697 18.7803C11.7626 19.0732 12.2375 19.0732 12.5304 18.7803L18.7804 12.5303Z" fill="#323544"></path>
          </svg>
        </footer>
      </div>

      {!load && data && (
        <div ref={chartContainerRef} className="OverviewDivProductPage flex">
          {showChart && <ChartOverview data={data} showChart={showChart} />}
          <OverviewDetails data={data} />
        </div>
      )}
    </div>
  );
}

export default MainProduct;
