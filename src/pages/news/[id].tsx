import { useContext } from 'react';
import { useRouter } from "next/router";
import LayOut from "@components/LayOut"
import { newsData } from "@data/dataTest";
import { Button, Col, Image, Row } from "react-bootstrap";
import { LanguageContext } from "@components/LanguageContext";
import Link from 'next/link';
import HtmlContent from '@components/HtmlContent';
import GoBack from '@components/GoBack';

interface newsDetail {
    id: string;
    language: string;
    img: string;
    title: string;
    detail: string;
    date?: string;
}


const newsDetailPage: React.FC = () => {
    const router = useRouter();
    const { id } = router.query;
    const newsItem = newsData.find((item: newsDetail) => item.id === id);
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <LayOut>
            <div className='titie-tab py-2'>
                <GoBack />
                {newsItem?.title}
            </div>
            <div className="container adoption-page">
                <Row className='mt-5'>
                    <Col md={6} sm={12}>
                        <Image className="w-100 object-contain" src={newsItem?.img} alt="" height={450} />
                    </Col>
                    <Col md={6} sm={12}>
                        <HtmlContent content={newsItem?.detail} />
                        <h5>{newsItem?.date}</h5>
                    </Col>
                </Row>
            </div>
        </LayOut >
    );
}

export default newsDetailPage;