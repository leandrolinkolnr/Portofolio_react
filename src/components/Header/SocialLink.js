
export function SocialLink({ url, icon }){
    return(
        <a href="{url}" target="_blankz" rel="noreferrer">
        <i className={icon}></i>
        </a>
    )
}