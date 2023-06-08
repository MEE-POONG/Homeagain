import { Button, Card } from "react-bootstrap";
import LayOut from '@components/LayOut';
import { dogDetail } from "@data/dataTest";
import { LanguageContext } from "@components/LanguageContext";
import { useContext } from "react";
import Link from "next/link";

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
                                    ? "Dogs waiting to be adopted"
                                    : "สุนัขที่รอรับการอุปการะ"
                                }

                            </p>
                            {myDogDetail.map((item: DogDetail) => (
                                <div key={item.id} className="col-lg-3 mb-4 d-flex d-sm-flex justify-content-between">
                                    <Card style={{ width: '15rem' }} >
                                        <Card.Img variant="top" src={item.image} />
                                        <Card.Body>
                                            <Card.Title>
                                                {currentLanguage === "EN"
                                                    ? "Name"
                                                    : "ชื่อ"
                                                } : {item.dogName}
                                            </Card.Title>
                                            <Card.Text className="p-0 m-0">
                                                {currentLanguage === "EN"
                                                    ? "Ole"
                                                    : "อายุ"
                                                }
                                                : {item.old}
                                            </Card.Text>
                                            <Card.Text className="p-0 m-0">
                                                {currentLanguage === "EN"
                                                    ? "Sex"
                                                    : "เพศ"
                                                } 
                                                : {item.sex}
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
                </div>
            </LayOut>
        </>
    )
}