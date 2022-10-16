import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
    image: string;
}

function Crad({ image }: Props) {
  return (
    <Card style={{  }}>
      <Card.Img variant="top" src={image}  />
      <Card.Body>
        <Card.Title>SuperChat</Card.Title>
        <Card.Text style={{ fontSize: 12 }} >
          SuperChat is a small project made with Express, Socket.io, Firestore, and JQuery.
          It&apos;s a One-room chat between all users with simple authentication system.
          
        </Card.Text>
        <Button variant="primary" >
            <a style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel='noreferrer' href="https://superchat.onrender.com">Try It Now</a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Crad;