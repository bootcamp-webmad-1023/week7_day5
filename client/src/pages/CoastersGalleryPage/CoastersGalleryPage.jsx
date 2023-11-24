import { Button, Container, Modal } from 'react-bootstrap'
import CoastersList from '../../components/CoastersList/CoastersList'
import NewCoasterForm from '../../components/NewCoasterForm/NewCoasterForm'
import { useContext, useEffect, useState } from 'react'

import coastersService from '../../services/coasters.services'
import { AuthContext } from '../../contexts/auth.context'

const CoastersGalleryPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [coasters, setCoasters] = useState()

    const { loggedUser } = useContext(AuthContext)

    useEffect(() => {
        loadCoasters()
    }, [])

    const loadCoasters = () => {
        coastersService
            .getCoasters()
            .then(({ data }) => setCoasters(data))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        setShowModal(false)
        loadCoasters()
    }

    return (
        <div className="CoastersGalleryPage">
            <Container>
                <h1>Galería de montañas rusas</h1>
                {loggedUser && <Button variant='dark' size='sm' onClick={() => setShowModal(true)}>Crear nueva</Button>}
                <hr></hr>
                <CoastersList coasters={coasters} />
            </Container>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva montaña rusa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewCoasterForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default CoastersGalleryPage