import { useContext } from "react";
import LayOut from "../../components/LayOut";
import { LanguageContext } from '../../components/LanguageContext';

export default function SupportUsPage() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <>
            <LayOut>
                <div className="supportus-page container-fluid py-5 mb-5" >
                    <div className="container text-center py-5">
                        <h2 className="display-5 mb-5">
                            {currentLanguage === "EN"
                                ? "How to donate"
                                : "วิธีร่วมบริจาค"}
                        </h2>

                        <div className="text-start">
                            <h4>ท่านสามารถบริจาคอาหารสัตว์และสิ่งของอื่น ๆ ที่จำเป็นต่อการดูแลสัตว์ ดังนี้</h4>
                            {/* <div className="mt-4">
                                <h5>สิ่งของที่ต้องการด่วน (ใช้ต่อเนื่อง)</h5>
                                <p className="mb-0">-อาหารกระป๋อง ทุกรสชาติไม่จำกัดยี่ห้อ</p>
                                <p className="mb-0">-อาหารเม็ด ทุกรสชาติไม่จำกัดยี่ห้อ</p>
                                <p className="mb-0">-อาหารกระป๋อง</p>
                            </div> */}
                            <div className="mt-4 mb-3">
                                <h5>สิ่งของที่รับบริจาค (ใช้ต่อเนื่อง) * รับ บริจาค ทุกยี่ห้อ *</h5>
                                <p className="mb-0">-อาหารเม็ด สุนัข และ แมว (ทุกยี่ห้อ) สำหรับสุนัขโต</p>
                                <p className="mb-0">-อาหารเม็ด ทุกรสชาติไม่จำกัดยี่ห้อ</p>
                                <p className="mb-0">-แผ่นรองซับ  แบบแผ่นปูกรง</p>
                                <p className="mb-0">-ทรายแมว (เพื่อเอาให้แมวขับถ่าย)</p>
                                <p className="mb-0">-น้ำยาล้างจาน , ถุงขยะ ขนาดกลางและใหญ่</p>
                                <p className="mb-0">-แชมพูอาบน้ำสุนัข</p>
                            </div>
                            <p className="mb-0">ท่านสามารถร่วมบริจาคเป็นสิ่งของอื่น ๆ นอกจากรายการข้างต้นได้</p>
                            <p>ซึ่งการร่วมบริจาค สามารถติดต่อเจ้าหน้าที่มูลนิธิ คุณนัท: 098-241-8799 เพื่อดำเนินการ</p>

                        </div>


                    </div>
                </div>
            </LayOut>
        </>
    )
}