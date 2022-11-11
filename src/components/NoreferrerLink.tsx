function NoreferrerLink(
    { link, nestedElement }:
        { link: string, nestedElement: any }) {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            {nestedElement}
        </a>
    )
}

export default NoreferrerLink