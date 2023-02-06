import { Products } from "../../types/Products"
interface CurrentProps {
  item: Products
  onQuantityUp: (prod: Products) => void
  onQuantityDown: (prod: Products) => void
  onDelete: (prod: Products) => void
}

const CardItem: React.FC<CurrentProps> = (props) => {
  const product = props.item
  return (
    <div className="card-item">
      <p className="title">{product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p className="subtotal">
        Subtotal: {product.price * product.quantity}AMD
      </p>
      <button onClick={()=>props.onQuantityUp(product)}>+</button>
      <button onClick={()=>props.onQuantityDown(product)}>-</button>
      <button onClick={()=>props.onDelete(product)} className="del-btn">
        Delete
      </button>
    </div>
  )
}
export default CardItem
