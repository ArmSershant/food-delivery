import photo from "../../../src/food.jpeg"
import { Products } from "../../types/Products"
import Categories from "../Categories/Categories"
interface CurrentProps {
  onFilter: (text: string) => void
}
const Header: React.FC<CurrentProps> = (props) => {
  return (
    <>
      <img alt="Header" className="main-pic" src={photo} />
      <Categories onFilter={props.onFilter} />
    </>
  )
}
export default Header
