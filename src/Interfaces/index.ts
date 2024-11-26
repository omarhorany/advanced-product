export interface Iproduct {
    id?: string | undefined;
    title: string;
    description: string;
    imageURL: string;
    price: string;
    color: string[];
    category: {
        name: string ; 
        imageURL: string;
    }

}

export interface IformInput {
    id: string;
    name: string;
    label: string;
    type: string;
  }