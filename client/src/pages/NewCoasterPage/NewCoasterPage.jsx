import { Container } from 'react-bootstrap'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'
import { useNavigate } from 'react-router-dom'

const NewCoasterPage = () => {

    const navigate = useNavigate()

    const redirectToGallery = () => {
        navigate('/galeria')
    }

    return (
        <div className="NewCoasterPage">
            <Container>
                <h1>Nueva montaña rusa</h1>
                <hr></hr>
                <NewCoasterForm fireFinalActions={redirectToGallery} />
            </Container>
        </div>
    )
}

export default NewCoasterPage