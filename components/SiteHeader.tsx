import { useContext } from 'react';
import { Container, Row, Col, Modal, Button, Image } from "react-bootstrap";
import { BsFacebook, BsTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import DonationModal from './Donation';
import { LanguageContext } from './LanguageContext';

const SiteHeader: React.FC = () => {
    const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

    // const [currentLanguage, setCurrentLanguage] = useState<'en' | 'th'>('en');
    const switchLanguage = () => {
        setCurrentLanguage(currentLanguage === 'EN' ? 'TH' : 'EN');
    };

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
                <div className='mx-3'>
                    <button onClick={switchLanguage} className='btn language p-0'>
                        <Image className={currentLanguage === 'TH' ? 'show' : ''} width={45} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/d6b61f6d-92fb-4830-0dfd-aa3ef41ed900/100'} />
                        <Image className={currentLanguage === 'EN' ? 'show' : ''} width={45} src={'https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/b284a787-d18d-42be-6c9d-bc01cfd5d300/100'} />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SiteHeader;