import { Button, Card } from "react-bootstrap";
import LayOut from '@components/LayOut';
import { dogDetail } from "@data/dataTest";
import { LanguageContext } from "@components/LanguageContext";
import { useContext } from "react";

interface DogDetail {
    id: string;
    image: string;
    dogName: string;
    character: string;
    sex: string;
    dateofbirth?: string;
    old: string;
    story: string;
    dateCome?: string;
}

export default function AdoptionPage() {
    const { currentLanguage } = useContext(LanguageContext);
    let myDogDetail: DogDetail[] = dogDetail.filter(dog => dog.language === currentLanguage);

    return (
        <>
            <LayOut>
                {/* Page Header */}
                <div className="adoption-page container-fluid py-5 fade-in" data-wow-delay="0.1s">
                    <div className=" container text-center py-3 mb-5 mt-5">
                        <div className="mb-5">
                            <h3 className="display-5 mb-4">
                                {currentLanguage === "EN"
                                    ? "Adoption Dog"
                                    : "การรับอุปการะสุนัขด้อยโอกาส"}
                            </h3>
                            <img src="/images/1.jpeg" alt="" className="w-100 rounded-3" />
                        </div>

                        <div className="row align-content-around">
                            <p className="display-5 text-start py-4">
                                {currentLanguage === "EN"
                                    ? "Adoption Dog"
                                    : "สุนัขที่รอรับการอุปการะ"}
                            </p>
                            {dogDetail.map((item) => (
                                <div key={item.id} className="col-lg-3 mb-4 d-flex d-sm-flex justify-content-between">
                                    <Card style={{ width: '15rem' }}>
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>เพศเมีย</Card.Title>
                                            <Card.Text>
                                                {item.old}
                                            </Card.Text>
                                            <a href={"adoption/" + item.id}>
                                                <Button variant="">โปรดอุปถัมภ์หนู</Button>
                                            </a>
                                        </Card.Body>
                                    </Card>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </LayOut>
        </>
    )
}