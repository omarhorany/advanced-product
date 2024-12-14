import { ChangeEvent, FormEvent, useState } from "react"
import ProductCard from "./components/ProductCard"
import Modal from "./components/ui/Modal"
import {colors, formInputsList, productList } from "./data"
import Button from "./components/ui/Button"
import { Input } from "@headlessui/react"
import { Iproduct } from "./Interfaces"
import { producValidation } from "./validation"
import ErrorMessage from "./components/ErrorMessage"
import CircleColor from "./components/CircleColor"
import { v4 as uuid } from 'uuid';
import Example from "./components/ui/Select"
import { productName } from "./types"


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
  const [isOpenEditModal, setOpenEditModal] = useState(false);
  const [isOpenConfirmModal, setOpenConfirmModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Iproduct>(defaultProductObj)
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);

  
 // ------ handler ------

    const closeModal= ()=> setIsOpen(false) ;
    const openModal= ()=> setIsOpen(true);
    const closeEditModal= ()=> setOpenEditModal(false) ;
    const openEditModal= ()=> setOpenEditModal(true);
    const closConfirmModal=()=> setOpenConfirmModal(true)   

const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) =>{
const {value , name} = event.target;
setProduct({...product,
  [name]: value,
});
setErrors({
  ...errors,[name]:'',
});
    };
    
const onChangeEditHandler = (event:ChangeEvent<HTMLInputElement>) =>{
      const {value , name} = event.target;
      setProductToEdit({...productToEdit,
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
    
    const removeProductHanddler= () =>{


    }

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

    const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { title,description, price,imageURL,} = productToEdit;
        
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
        const updatedProducts = [...products];
        updatedProducts[productToEditIdx] = {...productToEdit , colors:tempColor.concat(productToEdit.colors)};
        setProducts(updatedProducts);
        
        // Clear the edit form
        setProductToEdit(defaultProductObj);
        setTempColor([]);
        closeEditModal();
        };
 
      // ------ render ------

  const renderProductList =products.map((product, idx) =>
  
  <ProductCard 
    key={product.id}
    product={product}
    setProductToEdit={setProductToEdit} 
    openEditModal={openEditModal}
    idx={idx}
    setProductToEditIdx={setProductToEditIdx} 
    openConfirmModal={open}
    /> 

  )

  const randerFormInputList =formInputsList.map(input=>(
    <div className="flex flex-col mt-3" key={input.id}>
      <label htmlFor={input.id} className="pt-1">{input.label}</label>
      <Input
         value={product[input.name]}
         onChange={onChangeHandler}
         type="text" id={input.id}
         name={input.name}
         className="border-2 border-gray-300 shadow-md mt-2 py-2 px-2
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
        return;
        
      }
      if (productToEdit.colors.includes(color)) {
        setTempColor(prev => prev.filter(item => item !== color))
        return;
        
      }
        setTempColor((prev)=>([...prev,color]))}}
        
        
  />
  )

const randerProductEditwithErorrMsg = (id:string, label:string, name:productName ) => {
return (  <div className="flex flex-col mt-3" >
  <label htmlFor={id} className="pt-1">
    Product Title
    </label>
  <Input value={productToEdit[name]} onChange={onChangeEditHandler} type="text" id={id} name={name}  className="border-2 border-gray-300 shadow-md mt-2 py-2 px-2
   rounded-md focus:outline-none focus:ring-1 focus:border-indigo-500 focus:ring-indigo-500 text-md"/>
  <ErrorMessage msg={errors[name]}/>
</div>        
)
}


  return (
<main className="container mx-auto ">

  <div className="flex flex-wrap justify-between mx-10 my-16">
  <h1 className="font-bold text-5xl">Latest <span className="text-blue-700">Products</span></h1>
<Button className=" bg-blue-800 hover:bg-blue-600 w-48" onClick={openModal}>Build Product</Button>  
  </div>

<div className=" m-5 p-5 gap-5 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderProductList}
    </div>

{/* ---- add product modal ---- */}
    <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT"  >
   <form action="" onSubmit={submitHandler}>
    {randerFormInputList}
    
      <Example/>

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



    {/* ---- edit product modal ---- */}
    <Modal isOpen={isOpenEditModal} closeModal={closeEditModal} title="EDIT THIS PRODUCT" >
   <form action="" onSubmit={submitEditHandler}>
   {randerProductEditwithErorrMsg('title' , 'product title' , 'title')}
   {randerProductEditwithErorrMsg('description' , 'Product Description' , 'description')}
   {randerProductEditwithErorrMsg(' imageURL' , 'product  imageURL' , 'imageURL')}
   {randerProductEditwithErorrMsg('price' , 'product Price' , 'price')}
  
   <Example/>

    <div className="flex my-3 space-x-2 flex-wrap">
     {tempColor.concat(productToEdit.colors).map(color => (
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

        {/* ---- delete product modal ---- */}

        <Modal
         isOpen={isOpenConfirmModal}
         closeModal={closConfirmModal} 
         title="Are you sure you want to remove this produt" 
         description="Are you sure you want to delete this product? This action cannot be undone."
          >
    
      <div className="flex justify-between items-center space-x-2 mt-10 ">
       <Button className=" bg-blue-800 hover:bg-blue-600 w-fit "onClick={removeProductHanddler} >Yes, Remove</Button>  
       <Button className=" bg-red-800 hover:bg-red-600 "onClick={closConfirmModal}>Cancel</Button>  
      </div>
    </Modal>
</main>
  )
}

export default App
