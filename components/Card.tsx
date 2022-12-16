import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
    image: string
    children: React.ReactNode;
}

function Crad({ image, children }: Props) {
  return (
    <Card style={{  }}>
      <Card.Img variant="top" src={image}  />
      <Card.Body>
        <Card.Title>SuperChat</Card.Title>
        <Card.Text style={{ fontSize: 12 }} >
          { children }
        </Card.Text>
        <Button variant="primary" >
            <a style={{ textDecoration: 'none', color: 'white' }} target="_blank" rel='noreferrer' href="https://superchat.onrender.com">Try It Now</a>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Crad;