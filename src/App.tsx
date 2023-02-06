import "./App.css"
import Header from "./components/Header/Header"
import ProductList from "./components/ProductList/ProductList"
import Card from "./components/Card/Card"
import { DUMMY_PRODUCTS } from "./DummyProducts"
import React, { useMemo, useState } from "react"
import { Products } from "./types/Products"

const App: React.FC = () => {
  const [filterText, setFilterText] = useState("All")
  const [card, setCard] = useState<Products[]>([])

  const moveToCard = (product: Products) => {
    if (!card.includes(product)) {
      product.quantity = 1
      card.push(product)
    } else {
      product.quantity++
    }
    setCard([...card])
  }
  const calculateTotal = (card: Products[]) => {
    return card.reduce(
      (counter, item) => counter + item.price * item.quantity,
      0
    )
  }
  const filterProducts = (category: string) => {
    if (category === "All") {
      return DUMMY_PRODUCTS
    }
    return DUMMY_PRODUCTS.filter((elm) => elm.category === category)
  }
  const quantityUp = (product: Products) => {
    product.quantity++
    setCard([...card])
  }

  const quantityDown = (product: Products) => {
    product.quantity--
    if (product.quantity === 0) {
      card.splice(card.indexOf(product), 1)
    }
    setCard([...card])
  }

  const changeFilterText = (text: string):void => {
    setFilterText(text)
  }
  const removeFromCard = (product: Products) => {
    card.splice(card.indexOf(product), 1)
    setCard([...card])
  }

  const products = useMemo(() => filterProducts(filterText), [filterText])
  const total = useMemo(() => calculateTotal(card), [card])
  return (
    <>
      <Header onFilter={changeFilterText} />
      <div className="flex">
        <ProductList products={products} onMove={moveToCard} />
        <Card  
          items={card}
          total={total}
          onQuantityUp={quantityUp}
          onQuantityDown={quantityDown}
          onDelete={removeFromCard}
        />
      </div>
    </>
  )
}

export default App
