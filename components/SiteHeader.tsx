import { useState } from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import DonationModal from './modals';


export default function SiteHeader() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
       
        <div className="site-headr container-fluid text-light px-0 py-2">
            <div className="row gx-0 d-none d-lg-flex">
                <div className="col-lg-7 px-5 text-start">
                    <div className="h-100 d-inline-flex align-items-center me-4">
                        <BsFacebook />
                        <span className="me-2"></span>
                        <a href="https://web.facebook.com/profile.php?id=100057487088021">มูลนิธิบ้านหลังใหม่</a>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center">
                        <IoIosMail />
                        <span className="me-2"></span>
                        <a href="mailto:info@homeagaindoggiesfoundations.com">info@homeagaindoggiesfoundations.com</a>
                    </div>
                </div>
                <div className="col-lg-5 px-5 text-end">
                    <div className="h-100 d-inline-flex align-items-center mx-4">
                        <DonationModal/>
                    </div>
                    <div className="h-100 d-inline-flex align-items-center mx-n2">
                        <BsTelephoneFill />
                        <span className="me-2"></span>
                        <a href="tel:+098-241-8799">098-241-8799</a>
                    </div>
                </div>
            </div>

            
        </div>
    );
};


