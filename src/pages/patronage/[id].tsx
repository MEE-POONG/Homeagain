import { useRouter } from "next/router";
import LayOut from "../../../components/LayOut"
import { dogDetail } from "../../../data/dataTest";
import { Button, Col, Form, FormLabel, Row } from "react-bootstrap";

export default function DogDetail() {
    const router = useRouter();
    const { id } = router.query;
    const dogItem = dogDetail.find(item => item.id === id);
    return (
        <LayOut>
            <div className=" container-xxl py-5">
                <h2 className="text-center text-lg-start">ทำความรู้จัก น้องถั่วแดง</h2>
                <div className="container text-center">

                    <img className="w-50" src={dogItem?.image} alt="" />
                </div>
                <div className="text-center mt-5" data-wow-delay="0.3s">
                    <p className="mb-4">{dogItem?.story}</p>
                </div>
                ** ทั้งนี้เมื่อคุณเข้าร่วมเป็นพ่อ-แม่อุปถัมภ์แล้ว คุณจะได้รับข่าวของ{dogItem?.dogName}ว่าสามครั้งต่อปี ความเมตตาของคุณมีความหมายต่อน้อง รวมถึงสุนัขและแมวที่อยู่ในความดูแลของมูลนิธิฯ

                <div className="p-5 brunch-card text-center">
                    <p>การอุปถัมภ์น้อง</p>
                    {/* <img src="/images/brunch.jpg" className="img2" alt="" /> */}
                    <Row>
                        <Col>
                        <Form className="text-start p-5">
                        <Form.Group>
                            <label htmlFor="">นาย / นาง / นางสาว</label>
                            <select name="" id="">
                                <option value="">--โปรดเลือก--</option>
                                <option value="1">นาย</option>
                                <option value="2">นาง</option>
                                <option value="3">นางสาว</option>
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">ชื่อ</label>
                            <input type="text" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">นามสกุล</label>
                            <input type="text" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">อีเมล</label>
                            <input type="email" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">เบอร์โทร</label>
                            <input type="tel" name="" id="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="รับข่าวสาร" />
                        </Form.Group>
                    <Button>รับอุปถัมภ์</Button>

                    </Form>
                        </Col>
                        <Col>
                        <img src="/images/brunch.jpg" className="img2" alt="" />
                        </Col>
                    </Row>
                </div>
                {/* <div className="mt-4">
                    <Form className=" p-5">
                        <Form.Group>
                            <label htmlFor="">นาย / นาง / นางสาว</label>
                            <select name="" id="">
                                <option value="">--โปรดเลือก--</option>
                                <option value="1">นาย</option>
                                <option value="2">นาง</option>
                                <option value="3">นางสาว</option>
                            </select>
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">ชื่อ</label>
                            <input type="text" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">นามสกุล</label>
                            <input type="text" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">อีเมล</label>
                            <input type="email" name="" id="" />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="">เบอร์โทร</label>
                            <input type="tel" name="" id="" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="รับข่าวสาร" />
                        </Form.Group>
                    <Button>รับอุปถัมภ์</Button>

                    </Form>
                </div> */}
            </div>
        </LayOut>
    );


}