import LayOut from "../../../components/LayOut";

export default function Commitee() {
    return (
        <>
            <LayOut>
                <section className="about-section container text-center py-5">
                    <div className="py-4 origin-section">
                        <p className="display-5">คณะกรรมการของมูลนิธิฯ</p>
                    </div>
                    <div className=" m-sm-3 m-lg-5 shadow-sm">
                        <img src="/images/Organizational-Chart.png" className="w-lg-75 w-100" alt="" />
                    </div>
                </section>
            </LayOut>
        </>
    )
}