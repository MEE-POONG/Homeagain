import { useContext } from 'react';
import { Button, Card } from "react-bootstrap";
import LayOut from "../../../components/LayOut";
import { dogDetail } from "../../../data/dataTest";
import Link from "next/link";
import { LanguageContext } from "../../../components/LanguageContext";
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

const PatronagePage: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    let myDogDetail: DogDetail[] = dogDetail.filter(dog => dog.language === currentLanguage);
    return (
        <LayOut>
            <div className="adoption-page container py-5 fade-in" data-wow-delay="0.1s">
                <div className="row ">
                    <p className="display-5 text-center py-4">{currentLanguage === "EN" ? "Adoption Dog" : "สุนัขที่รอการอุปการะ"}</p>
                    {myDogDetail.map((item: DogDetail) => (
                        <div key={item.id} className="col-lg-3 mb-4 d-flex d-sm-flex justify-content-between">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.dogName}</Card.Title>
                                    <Card.Text className="p-0 m-0">
                                        Old : {item.old}
                                    </Card.Text>
                                    <Card.Text className="p-0 m-0">
                                        Sex : {item.sex}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Body className=" text-center pt-0">
                                    <Link href={"patronage/" + item.id} className="btn">
                                        {currentLanguage === "EN" ? "Foster Me" : "โปรดอุปถัมภ์หนู"}
                                    </Link>
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
