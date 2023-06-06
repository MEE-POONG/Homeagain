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
                                <p className="mb-4 details">โครงการนี้เริ่มขึ้นจากการรวมตัวกับเพื่อนๆ คนรักสัตว์ตั้งเป็นกลุ่มเล็กๆ  ชื่อ “กลุ่มเพื่อนข้างถนน เพื่อจิตอาสา โคราช”  เป็นการรวมตัวเพื่อนๆ จากหลากหลายสาขาอาชีพ  กลุ่มเราตั้งขึ้นมาเพราะอยากจะทำอะไรช่วยเหลือสังคมในแบบที่รักและถนัด</p>
                                <p className="mb-4 details">กลุ่มเราจัดตั้งขึ้นมา เมื่อ ปี พ.ศ. 2554 โดยการดำเนินงานของเราแต่เดิมเป็นการช่วยเหลือสุนัขด้อยโอกาสที่อยู่ในพื้นที่จังหวัดนครราชสีมา ซึ่งเป็นการช่วยเหลือชั่วคราว คือ การช่วยให้การรักษา นำไปทำหมันเพื่อลดปัญหาการเพิ่มจำนวน และประกาศหาบ้านให้ แต่หากไม่มีผู้รับอุปการะ เราก็จะนำสุนัขไปปล่อยไว้ที่เดิม เนื่องจากยังไม่มีพื้นที่มากพอที่จะดูแล</p>
                                <p className="mb-4 details">ต่อมา คุณพนอจิตต์ (ประธานมูลนิธิ) ได้บริจาคที่ดินที่เป็นพื้นที่ว่าง ตั้งอยู่ที่บ้านหนองหัวแรด  อ.หนองบุญมาก  จ.นครราชสีมา เพื่อใช่เป็นสถานที่ในการดำเนินกิจกรรมต่าง ๆ อาทิ เป็นที่พักสำหรับสุนัข หรือแมวจรจัด ใช้เป็นสถานที่ดูแลสุนัขหรือ แมวที่ป่วย เป็นต้น</p>
                                <p className="mb-4 details">จนเมื่อวันที่ 13 เมษายน พ.ศ.2563  ได้รับอนุญาตให้จัดตั้งเป็นมูลนิธิอย่างถูกต้อง ภายใต้ชื่อ <strong> HOME AGAIN DOGGIES FOUNDATION BY PILYNE LAND </strong>   หรือชื่อภาษาไทยว่า <strong> “ บ้านหลังใหม่ ”</strong> </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </LayOut>
    )
}