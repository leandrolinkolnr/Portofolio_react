import { SocialLink } from "./SocialLink"
import  './style.css'

export function Header() {
    return(
        <header>
            <h1>Leandro Lincoln</h1>
            <nav>
            <SocialLink url="https://github.com/leandrolinkolnr"
            icon="fa-brands fa-github" />
            </nav>
        </header>
    )
}


