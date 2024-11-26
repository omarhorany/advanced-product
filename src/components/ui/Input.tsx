import { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}
const Input = ({...rest} : IProps) => {
    return <input className=""{...rest}/>

        
};


export default Input