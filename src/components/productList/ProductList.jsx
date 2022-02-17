import "./productList.css"
import Product from '.././product/Product'
import { products } from "../../data";


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Mansoor Akhter</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi dolorum nam sint soluta suscipit! Deserunt facere dicta ipsa expedita, dolor eum provident, libero nisi natus voluptatum atque quaerat ut! Incidunt?
        </p>
      </div>
      <div className="pl-list">

        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
        </div>
      </div>
      )
}

      export default ProductList