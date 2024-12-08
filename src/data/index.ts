import { v4 as uuid } from 'uuid';
import { IformInput, Iproduct } from "../Interfaces";

export const productList: Iproduct[] = [
    {

      id: uuid(),
      title: "Car Cover",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
    {

      id: uuid(),
      title: "Car pic",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: ['#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
     {

      id: uuid(),
      title: "Car pic",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: [ '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
    {

      id: uuid(),
      title: "Car Cover",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
    {

      id: uuid(),
      title: "Car pic",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: ['#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
     {

      id: uuid(),
      title: "Car pic",
      description: "Waterproof and dustproof car cover for all weather protection.",
      imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg",
      price: "49.99",
      colors: [ '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC'],
      category: {
        name: "Cars",
        imageURL: "https://i.kinja-img.com/image/upload/c_fit,q_60,w_645/b23e1032fc3349867c76450bc9d23270.jpg"
      }
    },
    
];

export const formInputsList :IformInput[] =[
{
  id: "title" ,
  name: "title",
  label: "Product Title",
  type:"text",
},
{
  id: "description" ,
  name: "description",
  label: "Product Description",
  type:"text",
} ,
{
  id: "image" ,
  name: "imageURL",
  label: "Product image URL",
  type:"text",
},
{
  id: "price" ,
  name: "price",
  label: "Product Price",
  type:"text",
},

]

export const colors:string[] =[
  "#FF5733", 
  "#33FF57", 
  "#3057FF", 
  "#F0E68C", 
  "#4B0082",
  "#CC5500",
  "#71797E",
  "#FFC512"
]