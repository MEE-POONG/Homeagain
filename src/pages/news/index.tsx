import React, { useContext } from 'react';
import LayOut from '@components/LayOut';
import { LanguageContext } from '@components/LanguageContext';
import Carousel from 'react-bootstrap/Carousel';
import { newsData } from '@data/dataTest';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { slider } from "@data/dataTest";
import Slider from 'react-slick';
import Link from 'next/link';
interface newsDetail {
    id: string;
    language: string;
    img: string;
    title: string;
    detail: string;
    date?: string;
}

const NewsPage: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);
    let myNewsDetail: newsDetail[] = newsData.filter(dog => dog.language === currentLanguage);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <LayOut>
            <section className='News-section'>
                <div className="container-xxl py-5 bg-white mt-5 news rounded-3">
                    <h3>
                        {currentLanguage === "EN"
                            ? "Activity News"
                            : "ข่าวและกิจกรรม"}
                    </h3>
                    <div className="container">
                        <Row>
                            {myNewsDetail.map((item: newsDetail) => (
                                <Col key={item.id} lg={3} md={4} sm={12}>
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
                    </div>
                </div>
            </section>
        </LayOut>
    )
}

export default NewsPage;
