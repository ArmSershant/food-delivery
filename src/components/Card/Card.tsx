import CardItem from "../CardItem/CardItem"
import { Products } from "../../types/Products"
interface CurrentProps {
  items: Products[]
  total: number
  onQuantityUp: (x: Products) => void
  onQuantityDown: (x: Products) => void
  onDelete:(x:Products) => void
}

const Card: React.FC<CurrentProps> = (props) => {
  return (
    <div>
      <p className="total">Total: {props.total}</p>
      {props.items.map((elm) => {
        return <CardItem  key={elm.id} item={elm} {...props} />
      })}
    </div>
  )
}
export default Card
