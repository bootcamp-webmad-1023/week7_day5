import { useContext } from 'react'
import './Footer.css'
import { ThemeContext } from '../../contexts/theme.context'

const Footer = () => {

    const { theme } = useContext(ThemeContext)

    const customStyle = {
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
    }

    return (
        <footer style={customStyle}> Todos los derechos reservados | Nomre del tema: {theme}</footer>
    )
}

export default Footer