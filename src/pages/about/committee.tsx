import { Image, Row } from "react-bootstrap";
import LayOut from "../../../components/LayOut";

export default function Commitee() {
    return (
        <>
            <LayOut>
                <section className="about-section container text-center py-5 ">
                    <div className="py-5 origin-section">
                        <p className="display-5">คณะกรรมการของมูลนิธิฯ</p>
                    </div>
                    <div className="committee">
                        <div className="row lv-1 align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="d-flex people-list ADVISOR px-3 py-4 my-3">
                                    <Image className="rounded-circle" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <div className="w-100  m-auto">
                                        <h4 className=" text-uppercase ">ADVISOR ที่ปรึกษา</h4>
                                        <h6 className="bold">พระวิเทศสิทธิธรรมมาภรณ์ (เจ้าคุณฤทธิ์)</h6>
                                        <h6 className="bold">เจ้าอาวาสวัดอดัมมยตาราม</h6>
                                        <p className="title text-reset"> ผู้ก่อตั้งศูนย์ปฏิบัติธรรม Northwest Meditation Center</p>
                                        <h4 className=" text-uppercase ">CHAO KHUN RIT</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="p-2 w-100 people-list px-3 py-4 my-3" >
                                    <h5 className=" text-uppercase  bold">
                                        PRESIDENT
                                        <br />
                                        ประธาน
                                    </h5>
                                    <Image className="rounded-circle" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0">คุณพนอจิตต์ จิตต์สุวรรณ</h6>
                                    <p className="f-s-5 mb-0">Panorchit Chitsuwan Waymouth</p>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <div className="p-2 w-100 people-list px-3 py-4 my-3">
                                    <h5 className=" text-uppercase  bold">VICE PRESIDENT
                                        <br />
                                        รองประธาน
                                    </h5>
                                    <Image className="rounded-circle" src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0">คุณบัณฑิตทัศน์ ทสยันไชย</h6>
                                    <p className="f-s-5 mb-0">Bandidtat Tosayanchai</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="member">
                            <div className="lv-2">
                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h5 className=" text-uppercase bold f-s-1-rem">MANAGER{" "}<span>กรรมการ / ผู้จัดการ</span></h5>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <p className="bold mb-0">คุณณัฏฐา ชื่นชม</p>
                                    <p className="f-s-5 mb-0">Nattha  Chuenchom</p>
                                </div>
                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h5 className=" text-uppercase bold f-s-1-rem">ASSISTANT MANAGER{" "}<span>ผู้ช่วยผู้จัดการ</span></h5>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <p className="bold mb-0">คุณอดิศักดิ์ ก่อแก้ว</p>
                                    <p className="f-s-5 mb-0">Adisak Korkeaw</p>
                                </div>
                            </div>
                            <div className=" lv-3">
                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">CHEIF</h6>
                                    <p className="bold mb-0"><span>หัวหน้าศูนย์หนองบุญมาก</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณประวิทย์ ขุมเงิน</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Prawit  Kumngoen</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">VETERINARY</h6>
                                    <p className="bold mb-0"><span>สัตวแพทย์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">ดร.สถาพร อันอามาตย์</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Dr.Sathaporn Anammat</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">DIRECTOR</h6>
                                    <p className="bold mb-0"><span>กรรมการมูลนิธิบ้านหลังใหม่</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณยนัสฐา นาคเกิด</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Chanutha Narkgerd</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">DIRECTOR</h6>
                                    <p className="bold mb-0"><span>กรรมการมูลนิธิบ้านหลังใหม่</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณสุดา เหรียญมณี</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Suda Rianmanee</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">PUCLIC RELATION</h6>
                                    <p className="bold mb-0"><span>ฝ่ายประชาสมพันธ์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณลักษณาวดี สินทวงศ์ ณ อยุทธยา</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Luxanavadee Snidwongs</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">PUCLIC RELATION</h6>
                                    <p className="bold mb-0"><span>ฝ่ายประชาสมพันธ์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณลลิตา สินทวงศ์ ณ อยุทธยา</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Lalda Snidwongs</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">PUCLIC RELATION</h6>
                                    <p className="bold mb-0"><span>ฝ่ายประชาสมพันธ์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">ไทยแอนนา เวย์เม้าท์</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Thaina Weymouth</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">PUCLIC RELATION</h6>
                                    <p className="bold mb-0"><span>ฝ่ายประชาสมพันธ์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณคณิษฐ์นันท์ อิศรางกูร ณ อยุทธยา</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Kanisnan Isarangkun</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">TREASURER</h6>
                                    <p className="bold mb-0"><span>เหรัญญิก</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณณัฐฐาพร เงินคำ</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Natthaphon Ngoenkham</p>
                                </div>

                                <div className="p-2 people-list px-3 py-4 my-3">
                                    <h6 className="bold mb-0">WEBSITE</h6>
                                    <p className="bold mb-0"><span>ดูแลเว็บไซต์</span></p>
                                    <Image className="rounded-circle" width={150} src="https://imagedelivery.net/QZ6TuL-3r02W7wQjQrv5DA/947130a0-adde-4905-9003-48e461328800/300" />
                                    <h6 className="bold mb-0 f-s-10">คุณทศพร ดีสุทธิ</h6>
                                    <p className="f-s-5 mb-0 f-s-5">Tossapom Doesutti</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </LayOut >
        </>
    )
}