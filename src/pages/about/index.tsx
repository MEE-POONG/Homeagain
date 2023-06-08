import React, { useContext } from 'react';
import LayOut from '@components/LayOut';
import { LanguageContext } from '@components/LanguageContext';

const AboutPage: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <LayOut>
            {/* Page Header */}
            <section className='about-section container-fluid '>
                <img src="/images/pic2.png" className=' w-100' alt="" />
                <div className="container-xxl py-5 bg-white mt-5 rounded-3">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-4 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid rounded" data-wow-delay="0.1s" src="images/pic1.jpg" />
                            </div>
                            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                                <h1 className="display-5 mb-0">{currentLanguage === "EN" ? "Welcome to the new house foundation" : "ยินดีต้อนรับสู่มูลนิธิบ้านหลังใหม่"}</h1>
                                <p className="text-primary mb-4"> Home Again Doggies Foundations</p>
                                {/* Additional content here */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </LayOut>
    )
}

export default AboutPage;
