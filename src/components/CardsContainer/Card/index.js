import './card.css';

function Card({image, alt}){
    return(
        <div className="card">
        <img src={image} alt={alt} width="100" />
        </div>
    )
}

export default Card;