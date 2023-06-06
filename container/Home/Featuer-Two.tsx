import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageContext';

export default function FeatureTwo() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="featuertwo-section container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-end">
                    <div className="col-lg-6 wow fadeInUp " data-wow-delay="0.1s">
                        <img className="w-100" src="/images/pic1.jpg" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
                        <p className="text-primary mb-2 ">
                            {currentLanguage === "EN"
                                ? "New Home Foundation"
                                : "มูลนิธิบ้านหลังใหม่"}
                        </p>
                        <h1 className="display-5 mb-4">
                            {currentLanguage === "EN"
                                ? "For the New Home of Underprivileged Dogs"
                                : "เพื่อบ้านหลังใหม่ของสุนัขด้อยโอกาส"}
                        </h1>
                        <p className="mb-4">
                            {currentLanguage === "EN"
                                ? "This project began with a small group of animal-loving friends banding together, called 'Roadside Friends for Volunteer Spirit, Korat.' This collective was made up of individuals from various professions. We formed our group with the desire to contribute to society in a way that we are passionate about and skilled in. We carry out this volunteer work in our spare time."
                                : "โครงการนี้เริ่มขึ้นจากการรวมตัวกับเพื่อนๆ คนรักสัตว์ตั้งเป็นกลุ่มเล็กๆ  ชื่อ “กลุ่มเพื่อนข้างถนน เพื่อจิตอาสา โคราช”  เป็นการรวมตัวเพื่อนๆ จากหลากหลายสาขาอาชีพ  กลุ่มเราตั้งขึ้นมาเพราะอยากจะทำอะไรช่วยเหลือสังคมในแบบที่เรารักและถนัด  และทำไหว  ทำงานอาสานี้ในเวลาว่าง"}
                        </p>
                        <a className="custom-btn py-3 px-4" href="about">
                            {currentLanguage === "EN"
                                ? "Read to >>>"
                                : "อ่านต่อ >>>"}
                        </a>
                    </div>
                    {/* <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-5">
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <i className="fa fa-award fa-3x text-primary mb-3"></i>
                                <h4 className="mb-3">การสนับสนุนมูลนิธิ</h4>
                                <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-12">
                            <div className="border-start ps-4">
                                <i className="fa fa-users fa-3x text-primary mb-3"></i>
                                <h4 className="mb-3">Dedicated Team</h4>
                                <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                    <hr />
                </div>
            </div>
        </div>
    )
}