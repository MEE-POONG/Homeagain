import LayOut from "../../../components/LayOut";
import { LanguageContext } from "../../../components/LanguageContext";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";

export default function OrigigSection() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <>
            <LayOut>
                <section className="about-section text-center p-3">
                    <div className="container py-5 mt-5 origin-section">
                        <p className="display-5">{currentLanguage === "EN" ? "Welcome to the new house foundation" : "ประกาศจัดตั้งมูลนิธิฯ"}</p>

                        <Row className="lg-p-5 mt-5">
                            <Col sm={12} lg={6}>
                                <img src="/images/cer1.jpg" className="w-75 mb-5" alt="" />

                            </Col>
                            <Col sm={12} lg={6}>
                                <img src="/images/cer2.jpg" className=" w-75" alt="" />
                            </Col>
                        </Row>
                    </div>

                </section>
            </LayOut>
        </>
    )
}