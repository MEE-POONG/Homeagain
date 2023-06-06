import LayOut from "../../../components/LayOut";
import { LanguageContext } from "../../../components/LanguageContext";
import { useContext } from "react";

export default function OrigigSection() {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <>
            <LayOut>
                <section className="about-section container text-center">
                    <div className="py-5 mt-5 origin-section">
                        <p className="display-5">{currentLanguage === "EN" ? "Welcome to the new house foundation" : "ประกาศจัดตั้งมูลนิธิฯ"}</p>
                    </div>
                    <div className=" m-sm-3 m-lg-5 py-5 shadow-sm">
                        <img src="/images/cer1.jpg" className="w-lg-50 w-75" alt="" />
                    </div>
                    <div className=" m-sm-3 m-lg-5 py-5 shadow-snm">
                        <img src="/images/cer2.jpg" className="w-lg-50 w-75" alt="" />
                    </div>
                </section>
            </LayOut>
        </>
    )
}