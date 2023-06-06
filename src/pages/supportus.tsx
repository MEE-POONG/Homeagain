import { useContext, useState } from "react";
import LayOut from "../../components/LayOut";
import { LanguageContext } from '../../components/LanguageContext';
import useCopyToClipboard from "../../components/useCopyToClipboard";
import { BiCopy } from "react-icons/bi";

export default function SupportUsPage() {
    const { currentLanguage } = useContext(LanguageContext);

    const [value, copy] = useCopyToClipboard()

    return (
        <>
            <LayOut>
                <div className="supportus-page container-fluid py-5 mb-5 " >
                    <div className="container text-center py-5 bg-white rounded-3 p-lg-5" >
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
                                <p className="mb-0">- อาหารเม็ด สุนัข และ แมว (ทุกยี่ห้อ) สำหรับสุนัขโต</p>
                                <p className="mb-0">- อาหารเม็ด ทุกรสชาติไม่จำกัดยี่ห้อ</p>
                                <p className="mb-0">- แผ่นรองซับ  แบบแผ่นปูกรง</p>
                                <p className="mb-0">- ทรายแมว (เพื่อเอาให้แมวขับถ่าย)</p>
                                <p className="mb-0">- น้ำยาล้างจาน , ถุงขยะ ขนาดกลางและใหญ่</p>
                                <p className="mb-0">- แชมพูอาบน้ำสุนัข</p>
                            </div>
                            <p className="mb-0">ท่านสามารถร่วมบริจาคเป็นสิ่งของอื่น ๆ นอกจากรายการข้างต้นได้ ซึ่งการร่วมบริจาค สามารถติดต่อเจ้าหน้าที่มูลนิธิ คุณนัท: 098-241-8799 เพื่อดำเนินการ</p>

                        </div>

                        <div className="text-start mt-5">
                            <h4>นอกจากบริจาคสิ่งของจำเป็น ท่านสามารถร่วมบริจาคเป็นเงิน เพื่อสมทบทุนในการดูแลสุนัข ที่อยู่ในการอุปถัมภ์ของมูลนิธิได้</h4>
                            <div className="mt-4 mb-3">
                                <p className="mb-0">ช่องทางการโอนเงิน</p>
                                <h5>บัญชีธนาคารกรุงไทย</h5>
                                <p className="mb-0">ชื่อบัญชี : <strong>มูลนิธิบ้านหลังใหม่ Home Again Doggies Foundation</strong></p>
                                <p className="mb-0">เลขที่บัญชี :
                                    <button onClick={() => copy('679-3-47783-8')}
                                        className="border-0 bg-transparent">
                                        <strong>679-3-47783-8</strong> <BiCopy/> 
                                    </button>
                                </p>
                                <p className="mb-0">SWIFTCOED : KRTHTHBK </p>

                            </div>


                        </div>


                    </div>
                </div>
            </LayOut>
        </>
    )
}