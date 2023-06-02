import { BsFacebook } from "react-icons/bs";
import LayOut from "../../components/LayOut";
import { IoMdCall, IoMdHome, IoMdMail } from "react-icons/io";

export default function ContactPage() {
    return (
        <>
            <LayOut>
                <section className="contact-section" id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12 ms-auto mb-5 mb-lg-0">
                                <div className="contact-info-wrap">
                                    <h2>ติดต่อสอบถาม</h2>

                                    <div className="contact-image-wrap d-flex flex-wrap">
                                        <img src="images/banner.jpg"
                                            className="img-fluid avatar-image logo" alt="" />

                                        <div className="d-flex flex-column justify-content-center ms-3">
                                            <p className="mb-0">Home Again Goggies Foundation</p>
                                            <p className="mb-0"><strong>มูลนิธิบ้านหลังใหม่</strong></p>
                                        </div>
                                    </div>

                                    <div className="contact-info">
                                        <h5 className="mb-3">ข้อมูลติดต่อ</h5>

                                        <p className="d-flex mb-2">
                                            <i className="me-2"><IoMdHome /></i>
                                            Office 207/11 ถ.วัชรสฤษดิ์ ต.ในเมือง อ.เมือง จ.นครราชสีมา 3000
                                        </p>

                                        <p className="d-flex mb-2">
                                            <i className="me-2"><IoMdCall /></i>
                                            <a href="tel: 098-241-8799">
                                                098-241-8799
                                            </a>
                                        </p>

                                        <p className="d-flex mb-2">
                                            <i className=" me-2"><IoMdMail /></i>
                                            <a href="mailto:PCW@homeagaindoggiesfoundation.com">
                                                PCW@homeagaindoggiesfoundation.com
                                            </a>
                                        </p>

                                        <p className="d-flex">
                                            <i className="me-2"><BsFacebook /></i>
                                            <a href="https://www.facebook.com/profile.php?id=100057487088021">
                                                มูลนิธิบ้านหลังใหม่
                                            </a>
                                        </p>

                                        <a href="https://goo.gl/maps/hqnARXHtmkL1yZNGA" className="custom-btn btn mt-3 ">Get Direction</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 col-12 mx-auto">
                                <form className="custom-form contact-form" action="#" method="post" role="form">
                                    <h2>กรอกข้อมูลติดต่อมูลนิธิ</h2>
                                    <div className="row mt-4">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input type="text" name="first-name" id="first-name" className="form-control"
                                                placeholder="Name" required />
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-12">
                                            <input type="text" name="last-name" id="last-name" className="form-control"
                                                placeholder="Lastname" required />
                                        </div>
                                    </div>

                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" className="form-control mt-2"
                                        placeholder="Email" required />

                                    <textarea name="message" rows={5} className="form-control mt-2" id="message"
                                        placeholder="What can we help you?"></textarea>

                                    <button type="submit" className="button form-control mt-3">Send Message</button>
                                </form>
                            </div>

                            <h4 className="mt-5">แผนที่เส้นทางมูลนิธิ</h4>
                            <iframe  
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.4321904833287!2d102.09983681484462!3d14.968695089568827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31194c93a25401c7%3A0xfaf3ba1732a470d0!2s207%20Vatcharasarid%20Alley%2C%20Tambon%20Nai%20Mueang%2C%20Amphoe%20Mueang%20Nakhon%20Ratchasima%2C%20Chang%20Wat%20Nakhon%20Ratchasima%2030000!5e0!3m2!1sen!2sth!4v1682565964198!5m2!1sen!2sth"
                                width="600" height="450">
                            </iframe>

                        </div>
                    </div>
                </section>
            </LayOut>
        </>
    )
}