import { productName } from "../types";

export interface Iproduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    colors: string[];
    category: {
        name: string ; 
        imageURL: string;
    }

}

export interface IformInput {
    id: string;
    name: productName;
    label: string;
    type: string;
  }

  export interface Icategory {
    id : string;
    name: string;
    imageURL: string;

  }