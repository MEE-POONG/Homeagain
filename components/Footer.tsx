import Link from "next/link";
import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { BiHomeHeart, BiPhone } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Footer: React.FC = () => {
    return (
        <>
            <div className="container-fluid text-light footer mt-5 py-2 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row ">
                        <div className="col-md-6 text-break" >
                                        <h5 className="text-white mb-4 ">ข้อมูลติดต่อ</h5>
                                        <p className="d-flex mb-2 text-white">
                                            <i className="me-2"><BiHomeHeart /></i>
                                            Office 207/11 ถ.วัชรสฤษดิ์ ต.ในเมือง อ.เมือง จ.นครราชสีมา 3000
                                        </p>
                                        <p className="d-flex mb-2 text-white">
                                            <i className="me-2"><BiPhone /></i>
                                                098-241-8799
                                        </p>
                                        <p className="d-flex mb-2 text-white text-break">
                                            <i className=" me-2"><IoIosMail /></i>
                                                PCW@homeagaindoggiesfoundation.com
                                        </p>

                            <div className="d-flex pt-2">
                                <a className="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/profile.php?id=100057487088021"><i><FaFacebookF /></i></a>
                            </div>
                        </div>
                        <div className="col-md-3 py-2 mt-5 mt-lg-0">
                            <h5 className="text-white mb-2">หน้า</h5>
                            <a className="btn btn-link text-white" href="">หน้าหลัก</a>
                            <a className="btn btn-link text-white" href="">เกี่ยวกับมูลนิธิ</a>
                            <a className="btn btn-link text-white" href="">สนับสนุนเรา</a>
                            <a className="btn btn-link text-white" href="">การอุปถัมภ์</a>
                            <a className="btn btn-link text-white" href="">การรับอุปการะ</a>
                            <a className="btn btn-link text-white" href="">ติดต่อเรา</a>
                        </div>

                        <div className="col-md-3">
                            <h5 className="text-white mb-3 mt-5 mt-lg-0">ช่องทางบริจาค</h5>
                            <img className="w-50" src="images/brunch.jpg" alt="" />
                            <p className="mb-2 mt-3"> <strong>เลขประจำตัวผู้เสียภาษีอากร</strong> </p>
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