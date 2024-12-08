// productObj === errorsObj (title-description-image-price )
export const producValidation = (product:{title: string; description: string; imageURL: string; price: string;}) =>{
// return Object
const errors :{title: string; description: string;imageURL: string; price: string;}= {
    title: '',
    description: '',
    imageURL:'',
    price:'',
}

const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

if (!product.title.trim() || product.title.length < 10 || product.title.length>80) {
    errors.title = 'Product title must be between 10 to 80 characters'
}
if (!product.description.trim() || product.description.length < 10 || product.description.length> 900) {
    errors.description = 'Product description must be between 10 to 900 characters'
}
if (!product.imageURL.trim() || !validURL) {
    errors.imageURL = 'valid image url is required'
}
if (!product.price.trim()|| isNaN(Number(product.price))) {
    errors.price="enter valid price"
}
    return errors
}