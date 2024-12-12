import { Iproduct } from "../Interfaces"
import { txtSlicer } from "../utils/Function";
import CircleColor from "./CircleColor";
import Images from "./Images"
import Button from "./ui/Button"

interface IProps {
    product: Iproduct;
    setProductToEdit: (product :Iproduct) => void
    openEditModal :() => void
    idx : number
    setProductToEditIdx :(value : number) => void


}
const ProductCard = ({product, setProductToEdit, openEditModal, idx, setProductToEditIdx} : IProps) => {
    const {title, description, imageURL, price, category,colors}=product
    
          // ------ render ------

    const randerProductColors= colors.map( color => (<CircleColor key={color} color={color} onClick={function (): void {
        throw new Error("Function not implemented.");
    } }/>));
    
         // ------ handler ------

 const onEdit = () => {
    setProductToEdit(product);
    openEditModal()
    setProductToEditIdx(idx)
 }

 return (
     <div className="border rounded-md text-sm p-4 mx-2">
      <Images imageUrl={imageURL} alt={"Product image"} className={"rounded-md"}/>
      <h3 className="font-bold mt-3 py-3">{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex my-3 space-x-2 ">{randerProductColors}</div>

<div className="flex justify-between items-center ">
    <span>${price}</span>
    <Images imageUrl={category.imageURL} alt={category.name} className={"rounded-full w-10 h-10"}/>
</div>
<div className="flex justify-between items-center space-x-2 mt-4">
<Button className=" bg-blue-700 "onClick={onEdit}>Edit</Button>  
<Button className=" bg-red-700 ">Delete</Button>  

</div>
</div>
    )
}

export default ProductCard