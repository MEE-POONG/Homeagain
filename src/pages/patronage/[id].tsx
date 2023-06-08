import { useContext } from 'react';
import { useRouter } from "next/router";
import LayOut from "@components/LayOut"
import GoBack from '@components/GoBack';
import { dogDetail } from "@data/dataTest";
import { Button, Col, Image, Row } from "react-bootstrap";
import { LanguageContext } from "@components/LanguageContext";

import Link from 'next/link';

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

const DogDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const dogItem = dogDetail.find((item: DogDetail) => item.id === id);
    const { currentLanguage } = useContext(LanguageContext);
    

    return (
        <LayOut>
            <div className='titie-tab py-2'>
                <GoBack />
                {currentLanguage === "EN" ? "To Patronize : " : "ทำความรู้จัก : "} {dogItem?.dogName}
            </div>
            <div className="container adoption-page">
                <Row className='mt-5'>
                    <Col>
                        <Image className="w-100 object-contain" src={dogItem?.image} alt="" height={450} />
                    </Col>
                    <Col>
                        <h5 className="mb-0"><strong>{currentLanguage === "EN" ? "Sex : " : "เพศ"} {dogItem?.sex}</strong> </h5>
                        <h5 className="mb-0"><strong>{currentLanguage === "EN" ? "Birth Day : " : "วัน/เดือย/ปีเกิด: "}{dogItem?.dateofbirth}</strong> </h5>
                        <h5 className="mb-0"><strong>{currentLanguage === "EN" ? "Old : " : "อายุ: "}{dogItem?.old}</strong> </h5>
                        <h5 className="mb-3">{currentLanguage === "EN" ? "Date Of Foundation : " : "วันที่เข้ามาอยู่ในมูลนิธิ : "}วันที่เข้ามาอยู่ในมูลนิธิ: <strong>{dogItem?.dateCome}</strong> </h5>
                        <hr />
                        <h5 className="mb-0">{currentLanguage === "EN" ? "Color : " : "ลายสี: "} <strong>{dogItem?.character}</strong> </h5>
                        <h5 className="mb-0">{currentLanguage === "EN" ? "Character : " : "ลักษณะนิสัย: "}: <strong>{dogItem?.character}</strong> </h5>
                        <hr />
                        <p>{currentLanguage === "EN" ? "Character" :"ลักษณะนิสัย"}</p>
                        <h4 className="mb-1">{currentLanguage === "EN" ? "Old : " : "เรื่องราวของ: "}{dogItem?.dogName}</h4>
                        <h5>{dogItem?.story}</h5>
                    </Col>
                </Row>
                <div className="text-center mt-5">
                    <Link href="/form-spon" className='btn'>{currentLanguage === "EN" ? "To Patronize" : "ต้องการอุปถัมภ์"}</Link>
                </div>
            </div>
        </LayOut>
    );
}

export default DogDetailPage;