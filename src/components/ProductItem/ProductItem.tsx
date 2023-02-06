import { Products } from "../../types/Products"
interface CurrentProps {
  products: Products
  onMove: (products: Products) => void
}
const ProductItem: React.FC<CurrentProps> = (props) => {
  const product = props.products
  return (
    <div className="product-item">
      <img src={require("../../" + product.photo)} alt="" />
      <p>{product.name}</p>
      <p>{product.price}AMD</p>
      <button onClick={() => props.onMove(product)}>Order</button>
    </div>
  )
}
export default ProductItem
