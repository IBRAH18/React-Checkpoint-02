import { Card } from 'react-bootstrap';
import './App.css'

export function Player({ nom, equipe, nationalite, numero, age, imageJoueur }) {
    return (
        <div>
            <Card className='Card position-relative overflow-hidden rounded-5'>
                <div
                    style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    backgroundColor: '#08385d',
                    color: '#fff',
                    paddingInline: '10px',
                }}>
                    {numero}
                </div>
                <Card.Img variant="top" src={imageJoueur} alt={`Photo de ${nom}`} style={{marginTop: '10px'}}/>
                <Card.Body className='Card-Body'>
                    <Card.Title className='Card-Title'>{nom}</Card.Title>
                    <Card.Subtitle className='Card-Subtitle my-2 text-center'>{equipe}</Card.Subtitle>
                    <div className='Nat-Age d-flex justify-content-between align-items-center mt-3 pt-3 border-top'>
                        <p className='Nationalite'><span>Pays : </span>{nationalite}</p>
                        <p className='Age'><span>Age : </span>{`${age} ans`}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}