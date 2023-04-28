import LayOut from "../../../components/LayOut";

export default function OrigigSection() {
    return (
        <>
            <LayOut>
                <section className="about-section container text-center">
                    <div className="py-5 mt-5 origin-section">
                        <p className="display-5">ประกาศจัดตั้งมูลนิธิฯ</p>
                    </div>
                    <div className=" m-sm-3 m-lg-5 py-5 shadow-sm">
                        <img src="/images/cer1.jpg" className="w-lg-75 w-100" alt="" />
                    </div>
                    <div className=" m-sm-3 m-lg-5 py-5 shadow-snm">
                        <img src="/images/cer2.jpg" className="w-lg-75 w-100" alt="" />
                    </div>
                </section>
            </LayOut>
        </>
    )
}