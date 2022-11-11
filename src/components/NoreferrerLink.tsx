function NoreferrerLink({ link, nestedElement }: { link: string, nestedElement: any }) {
    return (
        <a href={link} className='text-blue-700 hover:text-blue-500' target="_blank" rel="noopener noreferrer">
            {nestedElement}
        </a>
    )
}

export default NoreferrerLink