import { BiBookReader } from "react-icons/bi";
export default function Service(){
    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
                <p className="fs-5 fw-bold text-primary">Our Services</p>
                <h1 className="display-5 mb-5">Services That We Offer For You</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                            <img src="/images/service-1.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-1.png" alt="" />
                            </div>
                            <h4 className="mb-3">Landscaping</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/> </i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                        <img src="/images/service-2.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-2.png" alt="" />
                            </div>
                            <h4 className="mb-3">Pruning plants</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                        <img src="/images/service-3.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-3.png" alt="" />
                            </div>
                            <h4 className="mb-3">Irrigation & Drainage</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                        <img src="/images/service-4.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-4.png" alt="" />
                            </div>
                            <h4 className="mb-3">Garden Maintenance </h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                        <img src="/images/service-5.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-5.png" alt="" />
                            </div>
                            <h4 className="mb-3">Green Technology</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/></i>Read More</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item rounded d-flex h-100">
                        <div className="service-img rounded">
                        <img src="/images/service-6.jpg" alt="" />
                        </div>
                        <div className="service-text rounded p-5">
                            <div className="btn-square rounded-circle mx-auto mb-3">
                            <img src="/images/icon/icon-6.png" alt="" />
                            </div>
                            <h4 className="mb-3">Urban Gardening</h4>
                            <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                            <a className="btn btn-sm" href=""><i className="text-primary me-2"><BiBookReader/></i>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}