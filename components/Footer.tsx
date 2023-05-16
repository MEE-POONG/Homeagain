import Link from "next/link";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { BiHomeHeart, BiPhone } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer: React.FC = () => {
  return (
    <>
       <div className="container-fluid text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row ">
                <div className="col-lg-6 col-md-6">
                    <h4 className="text-white mb-4">ติดต่อเรา</h4>
                    <p className="mb-2"><i className="me-3"><BiHomeHeart/></i>Office 207/11 ถ.วัชรสฤษดิ์ ต.ในเมือง อ.เมือง จ.นครราชสีมา 3000</p>
                    <p className="mb-2"><i className="me-3"><BiPhone/></i>098-241-8799</p>
                    <p className="mb-2"><i className="me-3"><IoIosMail/></i>info@homeagaindoggiesfoundations.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/profile.php?id=100057487088021"><i><FaFacebookF/></i></a>
                        {/* <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i></i></a> */}
                        {/* <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i></i></a> */}
                        {/* <a className="btn btn-square btn-outline-light rounded-circle me-2" href=""><i></i></a> */}
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-white mb-4">หน้า</h4>
                    <a className="btn btn-link" href="">หน้าหลัก</a>
                    <a className="btn btn-link" href="">เกี่ยวกับมูลนิธิ</a>
                    <a className="btn btn-link" href="">สนับสนุนเรา</a>
                    <a className="btn btn-link" href="">การอุปถัมภ์</a>
                    <a className="btn btn-link" href="">การรับอุปการะ</a>
                    <a className="btn btn-link" href="">ติดต่อเรา</a>
                </div>
    
                <div className="col-lg-3 col-md-6">
                    {/* <h4 className="text-white mb-4">ช่องทางบริจาค</h4> */}
                    <p className="mb-2"> <strong>เลขประจำตัวผู้เสียภาษีอากร</strong> </p>
                    <p>099-3-00043012-3</p>

                </div>
            </div>
        </div>
    </div>

    {/* Copyright Start */}
    <div className="container-fluid copyright py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a className="border-bottom" href="#">Home Again Doggies Foundations</a>, All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-start">
                    Designed By <a className="border-bottom" href="https://htmlcodex.com">Me Promp Technologo Company Limited.</a> <br /> Distributed By <a href="https://themewagon.com">ThemeMeepoong</a>
                </div>
            </div>
        </div>
    </div>
    {/* Copyright End */}
    </>
  );
};

export default Footer;