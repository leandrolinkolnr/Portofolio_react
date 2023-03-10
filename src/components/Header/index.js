import  SocialLink  from "./SocialLink"
import  './header.css'

function Header() {
    return(
        <header>
            <h1> >>  Leandro Lincoln</h1>
            <nav>
            <SocialLink url="https://linkedin.com/in/leandrolincoln"
            icon="fa-brands fa-linkedin" />
            <SocialLink url="https://github.com/leandrolinkolnr"
            icon="fa-brands fa-github" />
            <SocialLink url="https://instagram.com/leandrolinkoln/"
            icon="fa-brands fa-instagram" />
            <SocialLink url="https://www.facebook.com/leandro.linkoln/"
            icon="fa-brands fa-facebook" />

            </nav>
        </header>
    )
}

export default Header;


