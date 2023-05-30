import LayOut from "../../../components/LayOut";

export default function Commitee() {
    return (
        <>
            <LayOut>
                <section className="about-section container text-center py-5 ">
                    <div className="py-4 origin-section">
                        <p className="display-5">คณะกรรมการของมูลนิธิฯ</p>
                    </div>
                    <div className=" m-sm-3 m-lg-5 shadow-sm">
                        <img src="/images/Organizational-Chart.png" className="w-lg-75 w-100" alt="" />
                    </div>

                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h4>Assistant Manager</h4>
                                <p className="title">ผู้ช่วยผู้จัดการ</p>
                                <img className=" rounded-circle" src="/images/adisak.jpg" alt="" />
                                <h4 className="name">นายอดิศักดิ์ ก่อแก้ว</h4>
                                <p className="title">Adisak Korkeaw</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <h4>Treasurer</h4>
                                <p className="title">เหรัญญิก</p>
                                <img className=" rounded-circle" src="/images/nattha.jpg" alt="" />
                                <h4 className="name">นางสาวณัฐฐาพร เงินคำ</h4>
                                <p className="title">
Natthaphon Ngoenkham</p>
                            </div>
                        </div>

                    </div>

                </section>
            </LayOut>
        </>
    )
}