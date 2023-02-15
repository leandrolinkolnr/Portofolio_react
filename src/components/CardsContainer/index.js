
import { Card } from './Card'
import './cardsContainer.css'

import HTMLLogo from '../../assets/techs/html-logo.png'
import ReactLogo from '../../assets/techs/react-logo.png'
import JsLogo from '../../assets/techs/js-logo.png'
import TsLogo from '../../assets/techs/ts-logo.png'
import AngularLogo from '../../assets/techs/angular-logo.png'
import CssLogo from '../../assets/techs/css-logo.png'

export function CardsContaniner(){
    return(
        <div className="techs">
            <h2>👨🏽‍💻 Tecnologias</h2>
            <main className="cards-container">
                <Card image={ JsLogo } alt="Logo do Javascript"/>
                <Card image={ TsLogo } alt="Logo do Typescript"/>
                <Card image={ ReactLogo } alt="Logo do React"/>
                <Card image={ AngularLogo } alt="Logo do Angular"/>
                <Card image={ HTMLLogo } alt="Logo do HTML"/>
                <Card image={ CssLogo } alt="Logo do CSS"/>
            </main>
        </div>
    )
}