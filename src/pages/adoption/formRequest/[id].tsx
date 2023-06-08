import { useRouter } from "next/router";
import LayOut from "@components/LayOut";

export default function FormSpon() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <LayOut>
            <section className="form-request container p-5">
                <div className="row mt-5">
                    <div className="col-lg-5 col-12 mx-auto">
                        <form className="custom-form" action="#" method="post" role="form">
                            <h2>กรอกข้อมูลของท่าน</h2>
                            <p>**กรุณากรอกข้อมูลตามความจริง เพื่อใช้ในการติดต่อ และยืนยันตัวตน</p>
                            <div className="row mt-4">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <label htmlFor="first-name">ชื่อ*</label>
                                    <input type="text" name="first-name" id="first-name" className="form-control"
                                        placeholder="" required />
                                </div>

                                <div className="col-lg-6 col-md-6 col-12">
                                    <label htmlFor="last-name">นามสกุล*</label>
                                    <input type="text" name="last-name" id="last-name" className="form-control"
                                        placeholder="" required />
                                </div>
                            </div>

                            <div className="mt-2">
                                <label htmlFor="work">อาชีพ*</label>
                                <input type="text" name="work" id="work" className="form-control" placeholder="" required />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="tel">เบอร์โทรศัพท์*</label>
                                <input type="tel" name="tel" id="tel" className="form-control" placeholder="" required />
                            </div>

                            <div className="mt-2">
                                <label htmlFor="email">อีเมล*</label>
                                <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control"
                                    placeholder="" required />
                            </div>

                            <label className="mt-3" htmlFor="email">โปรดอธิบายเกี่ยวกับตัวคุณ พอสังเขป*</label>
                            <textarea name="message" rows={5} className="form-control " id="message"
                                placeholder="เกี่ยวกับคุณ"></textarea>

                            <button type="submit" className="button form-control mt-3">บันทึก</button>
                        </form>
                    </div>


                    <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                        <div className="contact-info-wrap">
                            <h2>การรับอุปการะ</h2>

                            <div className="">
                                {/* <img src="/images/brunch.jpg" className="img-bunch" alt="" /> */}
                                <img src="/images/banner.jpg" className="w-50" alt="" />
                                <div className="ms-3">
                                    <p className="mb-0">มีข้อสงสัยเกี่ยวกับการรับอุปการะสุนัข/แมว</p>
                                    <p className="mb-0">ติดต่อ: <strong>มูลนิธิบ้านหลังใหม่</strong></p>
                                    <p className="mb-0">เบอร์โทร: <strong>098-241-8799 (คุณนัท)</strong></p>
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </LayOut>

    )
}