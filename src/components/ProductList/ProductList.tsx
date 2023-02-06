import ProductItem from "../ProductItem/ProductItem"
import { Products } from "../../types/Products"
interface CurrentProps {
  products: Products[]
  onMove: (products: Products) => void
}
const ProductList: React.FC<CurrentProps> = (props) => {
  return (
    <div className="flex">
      {props.products.map((elm) => {
        return <ProductItem key={elm.id} products={elm} onMove={props.onMove} />
      })}
    </div>
  )
}
export default ProductList
