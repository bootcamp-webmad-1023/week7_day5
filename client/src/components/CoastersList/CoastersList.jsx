import CoasterCard from '../CoasterCard/CoasterCard'
import { Row } from 'react-bootstrap'

const CoastersList = ({ coasters }) => {

    return (
        !coasters ?
            <h1>cargando</h1>
            :
            <>
                <Row>
                    {
                        coasters.map(elm => <CoasterCard {...elm} key={elm._id} />)
                    }
                </Row>
            </>
    )

}

export default CoastersList