import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaDog } from "react-icons/fa";


const DonationModal: React.FC = () => {
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button
                onClick={handleShow}
                type="button"
                className="btn btn-secondary my-2 btn-sm border-0 rounded-pill text-white p-2"
                data-toggle="modal" data-target="#exampleModalCenter"
            >
                <FaDog className="mx-1" /> Donation
            </button>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ช่องทางการบริจาค</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className=' mb-3'>บริจาคผ่านบัญชีธนาคารกรุงไทย</h4>
                    <p className=' mb-0'>ชื่อบัญชี : มูลนิธิบ้านหลังใหม่</p>
                    <p className=' mb-0'>Home Again Doggies Foundation</p>
                    <p className=' mb-0'><strong>หมายเลขบัญชี : 679-3-47783-8</strong> </p>
                    <p>SWIFTCOED : KRTHTHBK</p>
                    {/* <div className="mb-3">
                        <label  className="form-label"><i>*โปรดแนบหนักฐานการโอนเงิน</i> </label>
                        <input className="form-control form-control-sm" id="formFileSm" type="file" />
                    </div> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DonationModal;
