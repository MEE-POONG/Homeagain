import { Button, Card } from "react-bootstrap";
import LayOut from "../../../components/LayOut";

// Define the type of each dog detail item
interface DogDetail {
  id: string;
  image: string;
  old: string;
}

// Assuming dogDetailTH is an array of DogDetail
const dogDetail: DogDetail[] = /* Your data here */;

const PatronagePage = (): JSX.Element => {
  return (
    <LayOut>
      <div className="adoption-page container-fluid py-5 fade-in" data-wow-delay="0.1s">
        {/* rest of your code */}
        <div className="row ">
          <p className="display-5 text-start py-4">สุนัขที่รอการอุปการะ</p>
          {dogDetail.map((item: DogDetail) => (
            <div key={item.id} className="col-lg-3 mb-4 d-flex d-sm-flex justify-content-between">
              <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>เพศเมีย</Card.Title>
                  <Card.Text>{item.old}</Card.Text>
                  <a href={"patronage/" + item.id}>
                    <Button variant="">โปรดอุปถัมภ์หนู</Button>
                  </a>
                </Card.Body>
              </Card>
            </div> 
          ))}
        </div>
      </div>
    </LayOut>
  );
};

export default PatronagePage;
