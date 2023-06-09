import { useContext, useState } from "react";
import LayOut from "../../components/LayOut";
import { LanguageContext } from '@components/LanguageContext';
import useCopyToClipboard from "../../components/useCopyToClipboard";
import { BiCopy } from "react-icons/bi";
import { howtoDonate, donation } from "@data/dataTest";


interface HowtoDonate {
    id: string;
    tital1: string;
    list1: string;
    list2: string;
    list3: string;
    list4: string;
    list5: string;
    list6: string;
    list7: string;
    list8: string;

}
interface Donational {
    id: string;
    title: string;
    language: string;
    list: string;
    account: string;
    accName: string;
    accNo: string;
    swiftcode: string;
}


export default function SupportUsPage() {
    const { currentLanguage } = useContext(LanguageContext);
    let howto: HowtoDonate[] = howtoDonate.filter(how => how.language === currentLanguage);
    let payDonate: Donational[] = donation.filter(e => e.language === currentLanguage);

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
                        {howto.map((item: HowtoDonate) => (
                            <div key={item.id} className="text-start">
                                <h4>{currentLanguage === "EN" ? "" : ""}{item.tital1}</h4>
                                <div className="mt-4 mb-3">
                                    <h5>{item.list1}</h5>
                                    <p className="mb-0">- {item.list2}</p>
                                    <p className="mb-0">- {item.list3}</p>
                                    <p className="mb-0">- {item.list4}</p>
                                    <p className="mb-0">- {item.list5}</p>
                                    <p className="mb-0">- {item.list6}</p>
                                    <p className="mb-0">- {item.list7}</p>
                                </div>
                                <p className="mb-0">{item.list8}</p>

                            </div>
                        ))}


                        {payDonate.map((item: Donational) => (
                            <div key={item.id} className="text-start mt-5">
                                <h4>{item.title}</h4>
                                <div className="mt-4 mb-3">
                                    <p className="mb-0">{currentLanguage === "EN" ? "Money transfer channels " : "ช่องทางการโอนเงิน"} </p>
                                    <h5>{item.account}</h5>
                                    <p className="mb-0">{currentLanguage === "EN" ? "Account Name " : "ชื่อบัญชี"} : <strong>{item.accName}</strong></p>
                                    <p className="mb-0">{currentLanguage === "EN" ? "Account No. " : "เลขที่บัญชี"} :
                                        <button onClick={() => copy('679-3-47783-8')}
                                            className="border-0 bg-transparent">
                                            <strong>{item.accNo}</strong> <BiCopy />
                                        </button>
                                    </p>
                                    <p className="mb-0">{currentLanguage === "EN" ? "SWIFTCOED " : "สวิฟต์คอด"} : {item.swiftcode} </p>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </LayOut>
        </>
    )
}