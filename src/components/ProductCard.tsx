import { Iproduct } from "../Interfaces"
import { txtSlicer } from "../utils/Function";
import Images from "./Images"
import Button from "./ui/Button"

interface IProps {
    product: Iproduct;

}
const ProductCard = ({product} : IProps) => {
    const {title, description, imageURL, price, category}=product
 return (
     <div className="border rounded-md text-sm p-4 mx-2">
      <Images imageUrl={imageURL} alt={"Product image"} className={"rounded-md"}/>
      <h3 className="font-bold mt-3 py-3">{title}</h3>
      <p>{txtSlicer(description)}</p>

<div className="flex my-3 space-x-2 ">
    <span className="w-5 h-5 rounded-full bg-blue-500 cursor-pointer" />
    <span className="w-5 h-5 rounded-full bg-red-500 cursor-pointer"/>
    <span className="w-5 h-5 rounded-full bg-black cursor-pointer"/>
    <span className="w-5 h-5 rounded-full bg-yellow-500 cursor-pointer"/>

</div>
<div className="flex justify-between items-center ">
    <span>${price}</span>
    <Images imageUrl={category.imageURL} alt={category.name} className={"rounded-full w-10 h-10"}/>
</div>
<div className="flex justify-between items-center space-x-2 mt-4">
<Button className=" bg-blue-700 ">Edit</Button>  
<Button className=" bg-red-700 ">Delete</Button>  

</div>
</div>
    )
}

export default ProductCard