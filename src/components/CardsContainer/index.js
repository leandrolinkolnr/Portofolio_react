
import { Card } from './Card'
import './cardsContainer.css'

import HTMLLogo from '../../assets/techs/html-logo.png'

export function CardsContaniner(){
    return(
        <div className="techs">
            <h2>👨🏽‍💻 Tecnologias</h2>
            <main className="cards-container">
                <Card image={ HTMLLogo } alt="Logo do HTML"/>
            </main>
        </div>
    )
}