import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function PlaceHolderUI() {
  return (
    <div className="col-md-3 col-6 p-3">
      <div className="d-flex justify-content-around">
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src={imgbg} /> */}
          <Placeholder xs={12} bg="light" className="mb-1"  />
          <Placeholder xs={12} bg="light" className="mb-1"  />
          <Placeholder xs={12} bg="light" className="mb-1"  />
          <Placeholder xs={12} bg="light" className="mb-1"  />
          <Placeholder xs={12} bg="light" className="mb-1"  />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} className="text-center" />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow" >
              <Placeholder xs={7} bg="secondary"  /> <Placeholder xs={4} bg="secondary"  /> <Placeholder xs={4} bg="secondary"  />{' '}
              <Placeholder xs={6} bg="secondary"  /> 
              <Placeholder xs={8} bg="secondary"  />
            </Placeholder>
            <Placeholder.Button variant="success" className="btn-sm p-0 text-center" xs={6} />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PlaceHolderUI;