import React from 'react';
import { useContext } from 'react';
import { newsData } from '@data/dataTest';
import { LanguageContext } from '@components/LanguageContext';
import Link from 'next/link';
import { Card, Col, Row } from 'react-bootstrap';
// import HtmlContent from "@components/HtmlContent";

interface NewsItem {
    id: string,
    language: string,
    img: string,
    title: string,
    date: string,
    detail: string,
}

const NewsList: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    let myNewsDetail: NewsItem[] = newsData.filter(dog => dog.language === currentLanguage);
    return (
        <div className="container mt-5 text-center news mx-auto">
            <h3>
                {currentLanguage === "EN"
                    ? "Activity News"
                    : "ข่าวและกิจกรรม"}
            </h3>
            <Row>
                {myNewsDetail.map((item: NewsItem, index: number) => (
                    <Col lg={3} key={index}>
                        <Link className='m-2' href={`/news/${item.id}`}>
                            <Card>
                                <img className="card-img img-gallery" src={item.img} alt="" />
                                <Card.Body>
                                    <Card.Title>
                                        {item.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {/* <HtmlContent content={item?.detail} /> */}
                                        {item.date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                ))}
            </Row>
            <div className='text-end'>
                <Link href={`/news`} className='btn'>
                    <h3>{currentLanguage === 'EN' ? "Read >>>>" : "อ่านต่อ >>>>"}</h3>
                </Link>
            </div>
        </div>
    );
};

export default NewsList;
