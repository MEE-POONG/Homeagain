import { useRouter } from "next/router";
import LayOut from "../../../../components/LayOut";
import { dogDetail } from "../../../../data/dataTest";

export default function FormSpon() {
    const router = useRouter();
    const { id } = router.query;
    const dogItem = dogDetail.find(item => item.id === id);
    return (
        <LayOut>
            <section className="form-request container p-5">
                <div className="row mt-5">
                    <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                        <div className="contact-info-wrap">
                            <h2>ช่องทางการปุถัมภ์</h2>

                            <div className="">
                                <img src="/images/brunch.jpg" className="img-bunch" alt="" />

                                <div className="ms-3">
                                    <p className="mb-0">ท่านสามารถโอนเงินเพื่อช่วยอุถัมภ์น้อง{dogItem?.dogName} ได้ผ่านบัญชีของเรา และกรอกข้อมูลเพื่อรับข่าวสารต่าง ๆ เกี่ยวกับน้อง ๆ ในมูลนิธิได้</p>
                                    <p className="mb-0">ชื่อบัญชี: <strong>มูลนิธิบ้านหลังใหม่</strong></p>
                                    <p className="mb-0">บัญชีเลขที่: <strong>679-3-47783</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12 mx-auto">
                        <form className="custom-form contact-form" action="#" method="post" role="form">
                            <h2>กรอกข้อมูลของท่าน</h2>
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
                            <button type="submit" className="button form-control mt-3">บันทึก</button>
                        </form>
                    </div>

                </div>
            </section>
        </LayOut>

    )
}