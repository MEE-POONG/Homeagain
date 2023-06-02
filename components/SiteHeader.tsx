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

        <div className="site-header container-fluid text-light px-0 py-2">
            <div className='d-flex mx-md-5 align-items-center'>
                <div className="h-100 mx-3">
                    <BsFacebook />
                    <span className="me-2"></span>
                    <a href="https://web.facebook.com/profile.php?id=100057487088021">มูลนิธิบ้านหลังใหม่</a>
                </div>
                <div className="h-100 mx-3 d-none d-lg-block">
                    <IoIosMail />
                    <span className="mx-3 me-2"></span>
                    <a href="mailto:info@homeagaindoggiesfoundations.com">info@homeagaindoggiesfoundations.com</a>
                </div>
                <div className="ms-auto me-3">
                    <DonationModal />
                </div>
                <div className="mx-3 d-none d-md-block">
                    <BsTelephoneFill />
                    <span className="me-2"></span>
                    <a href="tel:+098-241-8799">098-241-8799</a>
                </div>
            </div>
        </div>
    );
};


