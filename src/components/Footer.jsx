const fullYear = new Date().getFullYear();
const gitHubLink = 'https://github.com/arianadiazmun/prop-banner';


export default function Footer () {
    return (
<footer>
    <p>&copy; {fullYear} </p>
    <p><a href={gitHubLink} target="blank" rel= "noreferrer">GitHub</a></p>
</footer>
    )

}