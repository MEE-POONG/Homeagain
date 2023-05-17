import { Button, Card } from "react-bootstrap";
import LayOut from '../../../components/LayOut';
import { dogDetail } from "../../../data/dataTest";

export default function AdoptionPage() {
    return (
        <>
            <LayOut>
                {/* Page Header */}
                <div className="adoption-page container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className=" container text-center py-3 mb-5">
                        <div className="mb-5">
                            <h3 className="display-4 mb-4">การรับอุปการะสุนัขด้อยโอกาส</h3>
                            <img src="/images/1.jpeg" alt="" className="w-100 rounded-3" />
                        </div>
                        <div className="row align-content-around">
                            <p className="display-5 text-start py-4">สุนัขที่รอการอุปการะ</p>
                            <div className="col-lg-3 mb-4">
                                {dogDetail.map((item) => (
                                <Card key={item.id} style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="/images/FB-ถั่วแดง.jpg" />
                                    <Card.Body>
                                        <Card.Title>สถานะ</Card.Title>
                                        <Card.Text>
                                        รอผู้อุปการะ
                                        </Card.Text>
                                        <a href={"adoption/" + item.id }>
                                            <Button variant="">โปรดอุปการะหนู</Button>
                                        </a>
                                    </Card.Body>
                                </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LayOut>
        </>
    )
}