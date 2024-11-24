import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { productList } from "./data"
import Button from "./components/ui/Button"

const App = () => {
  // ------ state ------
  const [isOpen, setIsOpen] = useState(false)


    // ------ handler ------

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  // ------ render ------

  const renderProductList =productList.map(product =><ProductCard key={product.id} product={product}/> )
  return (
<main className="container mx-auto">
<Button className=" bg-blue-800 hover:bg-blue-600 items-center " onClick={openModal}>add</Button>  
<div className=" m-5 p-5 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderProductList}
    </div>
    <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"  >
      <div className="flex justify-between items-center space-x-2 mt-4">
       <Button className=" bg-blue-800  hover:bg-blue-600 ">Submit</Button>  
       <Button className=" bg-red-800  hover:bg-red-600">Cancel</Button>  
      </div>
    </Modal>
</main>
  )
}

export default App
