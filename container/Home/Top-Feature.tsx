import { useContext } from 'react';

import { LanguageContext } from '../../components/LanguageContext';

export default function TopFeatures() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-10 col-12 text-center mx-auto mt-5">
                            <h2 className="mb-5">{currentLanguage === "EN" ? "Welcome to the new house foundation" : "ยินดีต้อนรับสู่มูลนิธิบ้านหลังใหม่"}</h2>
                        </div>

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
        // <div className="container-fluid top-feature py-5 pt-lg-0">
        //     <div className="container py-5 pt-lg-0">
        //         <div className="row gx-0">
        //             <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
        //                 <div className="bg-white shadow d-flex align-items-center h-100 px-5" >
        //                     <div className="d-flex">
        //                         <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
        //                             <i className="text-primary"></i>
        //                         </div>
        //                         <div className="ps-3">
        //                             <h4>No Hidden Cost</h4>
        //                             <span>Clita erat ipsum lorem sit sed stet duo justo</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
        //                 <div className="bg-white shadow d-flex align-items-center h-100 px-5" >
        //                     <div className="d-flex">
        //                         <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
        //                             <i className="fa fa-users text-primary"></i>
        //                         </div>
        //                         <div className="ps-3">
        //                             <h4>Dedicated Team</h4>
        //                             <span>Clita erat ipsum lorem sit sed stet duo justo</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
        //                 <div className="bg-white shadow d-flex align-items-center h-100 px-5" >
        //                     <div className="d-flex">
        //                         <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light">
        //                             <i className="fa fa-phone text-primary"></i>
        //                         </div>
        //                         <div className="ps-3">
        //                             <h4>24/7 Available</h4>
        //                             <span>Clita erat ipsum lorem sit sed stet duo justo</span>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}