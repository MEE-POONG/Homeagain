import { Button, Card } from "react-bootstrap";
import LayOut from "../../../components/LayOut";


export default function PatronagePage() {
    return (
        <>
            <LayOut>
            <div className="adoption-page container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className=" container text-center py-3 mb-5">
                        <div className="mb-5">
                            <h3 className="display-4 mb-4">การรับอุปถัมภ์สุนัขด้อยโอกาส</h3>
                            <img src="/images/1.jpeg" alt="" className="w-100 rounded-3" />
                        </div>
                        <div className="row align-content-around">
                            <p className="display-5 text-start py-4">สุนัขที่รอการอุปการะ</p>
                            <div className="col-lg-3 mb-4">
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="/images/FB-ถั่วแดง.jpg" />
                                    <Card.Body>
                                        <Card.Title>สถานะ</Card.Title>
                                        <Card.Text>
                                        รอผู้อุปการะ
                                        </Card.Text>
                                        <Button variant="">ทำความรู้จักเพิ่ม</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3 mb-4">
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="/images/FB-ถั่วแดง.jpg" />
                                    <Card.Body>
                                        <Card.Title>สถานะ</Card.Title>
                                        <Card.Text>
                                        รอผู้อุปการะ
                                        </Card.Text>
                                        <Button variant="">ทำความรู้จักเพิ่ม</Button>
                                    </Card.Body>
                                </Card>
                            </div>

                            <div className="col-lg-3 mb-4">
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="/images/FB-ถั่วแดง.jpg" />
                                    <Card.Body>
                                        <Card.Title>สถานะ</Card.Title>
                                        <Card.Text>
                                        รอผู้อุปการะ
                                        </Card.Text>
                                        <Button variant="">ทำความรู้จักเพิ่ม</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                            
                            <div className="col-lg-3 mb-4">
                                <Card style={{ width: '15rem' }}>
                                    <Card.Img variant="top" src="/images/FB-ถั่วแดง.jpg" />
                                    <Card.Body>
                                        <Card.Title>สถานะ</Card.Title>
                                        <Card.Text>
                                        รอผู้อุปการะ
                                        </Card.Text>
                                        <Button variant="">ทำความรู้จักเพิ่ม</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </LayOut>
        </>
    )
}