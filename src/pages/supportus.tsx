import { useContext, useState } from "react";
import LayOut from "../../components/LayOut";
import { LanguageContext } from '../../components/LanguageContext';
import useCopyToClipboard from "../../components/useCopyToClipboard";
import { BiCopy } from "react-icons/bi";
import { howtoDonate } from "../../data/dataTest";


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
                        {howtoDonate.map((item) => (
                        <div key={item.id} className="text-start">
                            <h4>{currentLanguage === "EN" ? "" : ""}{item.tital1}</h4>
                            <div className="mt-4 mb-3">
                                <h5>{item.tital1}</h5>
                                <p className="mb-0">- {item.list1}</p>
                                <p className="mb-0">- {item.list2}</p>
                                <p className="mb-0">- {item.list3}</p>
                                <p className="mb-0">- {item.list4}</p>
                                <p className="mb-0">- {item.list5}</p>
                                <p className="mb-0">- {item.list6}</p>
                            </div>
                            <p className="mb-0">{item.list7}</p>

                        </div>
                        ))}

                        <div className="text-start mt-5">
                            <h4>นอกจากบริจาคสิ่งของจำเป็น ท่านสามารถร่วมบริจาคเป็นเงิน เพื่อสมทบทุนในการดูแลสุนัข ที่อยู่ในการอุปถัมภ์ของมูลนิธิได้</h4>
                            <div className="mt-4 mb-3">
                                <p className="mb-0">ช่องทางการโอนเงิน</p>
                                <h5>บัญชีธนาคารกรุงไทย</h5>
                                <p className="mb-0">ชื่อบัญชี : <strong>มูลนิธิบ้านหลังใหม่ Home Again Doggies Foundation</strong></p>
                                <p className="mb-0">เลขที่บัญชี :
                                    <button onClick={() => copy('679-3-47783-8')}
                                        className="border-0 bg-transparent">
                                        <strong>679-3-47783-8</strong> <BiCopy />
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