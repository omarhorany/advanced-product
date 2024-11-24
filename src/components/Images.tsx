interface IProps {
imageUrl: string;
alt: string;
className: string;
}
const Images = ({imageUrl, alt, className} : IProps) => {
    return (
        <img src={imageUrl} alt={alt} className={className}/>
    )
}

export default Images