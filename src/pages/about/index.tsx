import { useContext } from 'react';
import LayOut from '../../../components/LayOut';
import { LanguageContext } from '../../../components/LanguageContext';



export default function AboutPage() {

    const { currentLanguage } = useContext(LanguageContext);

    return (
        <LayOut>
            {/* Page Header */}
            <section className='about-section container-fluid'>
                <img src="/images/pic2.png" className=' w-100' alt="" />
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-4 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid rounded" data-wow-delay="0.1s" src="images/pic1.jpg" />
                            </div>
                            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.3s">
                                <h1 className="display-5 mb-0">{currentLanguage === "EN" ? "Welcome to the new house foundation" : "ยินดีต้อนรับสู่มูลนิธิบ้านหลังใหม่"}</h1>
                                <p className="text-primary mb-4"> Home Again Doggies Foundations</p>
                                <p className="mb-4 details">โครงการนี้เริ่มขึ้นจากการรวมตัวกับเพื่อนๆ คนรักสัตว์ตั้งเป็นกลุ่มเล็กๆ  ชื่อ “กลุ่มเพื่อนข้างถนน เพื่อจิตอาสา โคราช”  เป็นการรวมตัวเพื่อนๆ จากหลากหลายสาขาอาชีพ  กลุ่มเราตั้งขึ้นมาเพราะอยากจะทำอะไรช่วยเหลือสังคมในแบบที่เรารักและถนัด  และทำไหว  ทำงานอาสานี้ในเวลาว่าง</p>
                                <p className="mb-4 details">กลุ่มเราตั้งขึ้นมาเมื่อปี พ.ศ. 2554  อาสาดูแลหมาและแมวจรจัดในโคราชให้ฟรี  โดยเน้นเรื่องการทำหมัน  เพื่อจะได้ลดปริมาณหมาและแมวจรจัดลง  เราเริ่มด้วยการเข้าไปทำหมันและฉีดวัคซีนให้หมาและแมวตามวัดต่างๆ ในโคราช  ระยะหลังมีคนแจ้งเข้ามาขอความช่วยเหลือหมาและแมวที่ป่วยหรือบาดเจ็บ  กลุ่มเราก็เข้าทำการช่วยเหลือพาไปรักษา  พร้อมทั้งทำหมันและฉีดวัคซีนให้  ก่อนนำไปล่อยไว้ที่เดิม  เนื่องจากเราไม่มีความพร้อมเรื่องสถานที่รับดูแลหมาและแมวดังกล่าว  ทุกเคสที่รักษาและทำหมันแล้ว  หากหาบ้านใหม่ให้ไม่ได้  เราจึงต้องนำกลับไปไว้ที่เดิมที่พบตัวน้อง ก็คือตามข้างถน  ตามวัด  หรือตามที่เดิมที่น้องอยู่</p>
                                <p className="mb-4 details"> ประมาณหนึ่งปีที่ผ่านมา  นัทตรวจพบว่าเป็น โรคซึมเศร้า  เริ่มไม่อยากเจอคน ไม่อยากคุยกับใคร  อยากอยู่คนเดียว  ชอบขับรถไปไกลๆ คนเดียว  ซึ่งทำให้หลายๆ คนป็นห่วง   พี่ปุ้ม ( ประธานมูลนิธิฯ ) เป็นลูกสาวของป้านัทเอง  พี่ปุ้มมีพื้นที่ว่างอยู่ที่บ้านหนองหัวแรด  อ.หนองบุญมาก  จ.นครราชสีมา    และพี่ปุ้มก็รักหมามากเหมือนกัน  พี่ปุ้มอยากให้นัทได้ทำกิจกรรมที่นัทชอบ  และเห็นนัททำกลุ่มช่วยเหลือหมาจรจัดอยู่แล้ว  พี่ปุ้มเลยบริจาคที่ดินเพื่อให้ทำเป็นสถานที่รับดูแลหมาที่ด้อยโอกาส  หมาป่วยและอาจจะรวมถึงหมาพิการด้วย</p>
                                <p className="mb-4 details">ขอลงทะเบียนเป็นมูลนิธิ   จนเราได้รับอนุญาตให้เป็นมูลนิธิอย่างถูกต้อง  เมื่อวันที่  13  เมษายน  พ.ศ. 2563   ภายใต้ชื่อ <strong> HOME AGAIN DOGGIES FOUNDATION BY PILYNE LAND </strong>   หรือชื่อภาษาไทยว่า <strong> “ บ้านหลังใหม่ ”</strong> </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </LayOut>
    )
}