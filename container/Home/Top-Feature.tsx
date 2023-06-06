import { useContext } from 'react';

import { LanguageContext } from '../../components/LanguageContext';

export default function TopFeatures() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <>
            <section>
                <div className='titie-tab mt-5'>
                    {currentLanguage === "EN"
                        ? "Welcome to the new house foundation"
                        : "ยินดีต้อนรับสู่มูลนิธิบ้านหลังใหม่"}
                </div>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="patronage" className="d-block">
                                    <img src="images/icon/love.png" className="featured-block-image img-fluid" alt="" />
                                    <p className="featured-block-text">ที่พัก <strong>สุนัขจรจัด</strong></p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center justify-content-around align-items-center">
                                <a href="patronage" className="d-block">
                                    <img src="images/icon/animal-care.png" className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text"><strong>การรับอุปการะ</strong> สุนัข</p>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                            <div className="featured-block d-flex justify-content-center align-items-center">
                                <a href="supportus" className="d-block">
                                    <img src="images/icon/donation.png" className="featured-block-image img-fluid" alt="" />

                                    <p className="featured-block-text">ช่วยเราด้วยการ<strong>บริจาค</strong></p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}