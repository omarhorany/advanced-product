import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import { colors, formInputsList, productList } from "./data"
import Button from "./components/ui/Button"
import { Input } from "@headlessui/react"
import { Iproduct } from "./Interfaces"
import { producValidation } from "./validation"
import ErrorMessage from "./components/ErrorMessage"
import CircleColor from "./components/CircleColor"
import { v4 as uuid } from 'uuid';


const App = () => {
  const defaultProductObj ={
    title: '',
    description: '',
    imageURL:'',
    price:'',
    colors:[],
    category:{
      name:" ",
      imageURL:" "
    }
  }
  // ------ state ------
  const [products,setProducts] = useState<Iproduct[]>(productList);
  const [product,setProduct] = useState<Iproduct>(defaultProductObj);
  const [errors,setErrors] = useState({title: '',description: '',imageURL:'',price:'',});
  const [tempColor,setTempColor] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false);


 // ------ handler ------

    const closeModal= ()=> setIsOpen(false) ;
    const openModal= ()=> setIsOpen(true);
    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
const {value , name} = event.target;
setProduct({...product,
  [name]: value,
});
setErrors({
  ...errors,[name]:'',
});
    };
    
    const onCancel = () => {
      setProduct(defaultProductObj)  
      closeModal()
    };
    
    const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
      event.preventDefault();
      const { title,description, price,imageURL,} = product;
      
      const errors = producValidation({
        title,
        description,
        price,
        imageURL,
      });

      const hasErrorMsg=Object.values(errors).some(value => value === '') && Object.values(errors).every(value => value === '');

       if (!hasErrorMsg) {
        setErrors(errors)
        return
        
      };
      setProducts(prev =>[ {...product , id: uuid(), colors:tempColor} , ...prev]);
      setProduct(defaultProductObj);
      setTempColor([]);
      closeModal();
      };
 
      // ------ render ------

  const renderProductList =products.map(product =><ProductCard key={product.id} product={product}/> );
  const randerFormInputList =formInputsList.map(input=>(
    <div className="flex flex-col mt-3" key={input.id}>
      <label htmlFor={input.id} className="pt-1">{input.label}</label>
      <Input value={product[input.name]} onChange={onChangeHandler} type="text" id={input.id} name={input.name}  className="border-2 border-gray-300 shadow-md mt-2 py-2 px-2
       rounded-md focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500 text-md"/>
      <ErrorMessage msg={errors[input.name]}/>
    </div>
  ));
  
  const randerProductColors= colors.map( color => 
  <CircleColor
   key={color}
   color={color}
   onClick={()=>{
      if (tempColor.includes(color)) {
        setTempColor(prev => prev.filter(item => item !== color))
        return
      }
        setTempColor((prev)=>([...prev,color]))}}
        
  />
  )
  return (
<main className="container mx-auto ">
<Button className=" bg-blue-800 hover:bg-blue-600 items-center w-80 " onClick={openModal}>Build Product</Button>  
<div className=" m-5 p-5 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderProductList}
    </div>

    <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"  >
   <form action="" onSubmit={submitHandler}>
    {randerFormInputList}
    <div className="flex my-3 space-x-2 flex-wrap">
     { tempColor.map(color => (
        <span key={color} className="p-1 mr-1 mb-1 text-xs rounded-md text-white"
         style={{backgroundColor:color}}>{color}</span>
        ))}
    </div>
    <div className="flex my-3 space-x-2 ">{randerProductColors}</div>

      <div className="flex justify-between items-center space-x-2 mt-10 ">
       <Button className=" bg-blue-800 hover:bg-blue-600 w-fit ">Submit</Button>  
       <Button className=" bg-red-800 hover:bg-red-600 "onClick={onCancel}>Cancel</Button>  
      </div>
   </form>
    </Modal>
</main>
  )
}

export default App
