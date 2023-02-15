import photo from "../../assets/leandrolincoln.jpg"
import './profile.css'

function Profile() {
    return(
        <figure>
            <img src={ photo } alt="Imagem de Leandro Lincoln" />
            <figcaption>Leandro Lincoln Rodrigues</figcaption>
        </figure>
    )
}

export default Profile;