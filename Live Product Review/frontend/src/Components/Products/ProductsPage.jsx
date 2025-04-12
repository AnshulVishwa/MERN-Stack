import "./Products.css"
import productData from "./AllProducts.json"

function ProductsPage() {
  return (
    <div className="productsPage flex">
        <main className='mainProductDiv flex'>
          {
            productData.map( ( v , i ) => (
              <div key={i} className="PcontentDiv flex">
                <div className="imageP">
                  <img className="imageP-image" src={v.image}></img>
                </div>
                <div className="PproductInfo flex">
                  <div className="headingP flex">
                    <div className="productNameP">
                      {v.name}
                    </div>
                    <div className="companyDivP">
                      {v.company}
                    </div>
                  </div>
                  <div className="priceP">{v.price}</div>
                  <div className="descriptionP">{v.description}</div>
                </div>
              </div>
            ) )
          }
        </main>
    </div>
  )
}

export default ProductsPage
