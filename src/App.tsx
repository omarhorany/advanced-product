import { useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { formInputsList, productList } from "./data"
import Button from "./components/ui/Button"
import { Input } from "@headlessui/react"

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
  const randerFormInputList =formInputsList.map(input=>(
    <div className="flex flex-col mt-3">
      <label htmlFor={input.id} className="pt-1">{input.label}</label>
      <Input type="text" id={input.id} name={input.name}  className="border-2 border-gray-300 shadow-md mt-2 py-2 px-2
       rounded-md focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500 text-md"/>
    </div>
  ));
  return (
<main className="container mx-auto">
<Button className=" bg-blue-800 hover:bg-blue-600 items-center " onClick={openModal}>add</Button>  
<div className=" m-5 p-5 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderProductList}
    </div>
    <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"  >
    {randerFormInputList}
      <div className="flex justify-between items-center space-x-2 mt-10 ">
       <Button className=" bg-blue-800 hover:bg-blue-600 w-fit ">Submit</Button>  
       <Button className=" bg-red-800 hover:bg-red-600 ">Cancel</Button>  
      </div>
    </Modal>
</main>
  )
}

export default App
