import { Card, Button, Col } from "react-bootstrap"
import './CoasterCard.css'
import { Link } from "react-router-dom"

const CoasterCard = ({ _id, title, imageUrl }) => {
    return (
        <Col lg={{ span: 3 }} md={{ span: 6 }}>
            <article className='CoasterCard mb-3'>
                <Card>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <div className="d-grid">
                            <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">Ver detalles</Link>
                        </div>
                    </Card.Body>
                </Card>
            </article>
        </Col>
    )
}

export default CoasterCard