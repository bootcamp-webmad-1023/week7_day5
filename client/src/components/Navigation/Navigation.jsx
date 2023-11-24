import { useContext } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../contexts/theme.context'
import { AuthContext } from '../../contexts/auth.context'

const Navigation = () => {

    const { theme, swhitchTheme } = useContext(ThemeContext)
    const { loggedUser, logout } = useContext(AuthContext)


    return (
        <Navbar bg={theme} data-bs-theme={theme} className='mb-5' expand="lg">
            <Container>
                <Navbar.Brand href="#home">CoastersApp_</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={'/'} className='nav-link'>Inicio</Link>
                        <Link to={'/galeria'} className='nav-link'>Galería</Link>
                        <Link to={'/crear'} className='nav-link'>Crear</Link>

                        {
                            loggedUser
                                ?
                                <>
                                    <span className='nav-link' onClick={logout}>Cerrar sesión</span>
                                </>
                                :
                                <>
                                    <Link to={'/registro'} className='nav-link'>Registro</Link>
                                    <Link to={'/inicio-sesion'} className='nav-link'>Inicio de sesión</Link>
                                </>
                        }

                    </Nav>

                    <Navbar.Text className="justify-content-end">
                        {loggedUser && <Navbar.Text>¡Hola, {loggedUser.username}!</Navbar.Text>}
                        <Button variant={'light'} size='sm' onClick={swhitchTheme}>Tema {theme === 'light' ? 'oscuro' : 'claro'}</Button>
                    </Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation