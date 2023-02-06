import { Products } from "../../types/Products"

interface CurrentProps {
  onFilter: (products: string) => void
}
const Categories: React.FC<CurrentProps> = (props) => {
  const categories = ["All", "Fruits", "Pizza", "Burger", "Coffee", "Drink"]
  return (
    <>
      <ul className="horizontal">
        {categories.map((elm, i) => (
          <li onClick={() => props.onFilter(elm)} key={i}>
            {elm}
          </li>
        ))}
      </ul>
    </>
  )
}
export default Categories
