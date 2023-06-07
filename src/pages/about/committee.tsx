import { Image, Row } from "react-bootstrap";
import LayOut from "../../../components/LayOut";
import { committee } from "../../../data/dataTest";
import { useContext } from "react";
import { LanguageContext } from "../../../components/LanguageContext";

const Committee: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);

    const committeeLevel = (level) => {
        return committee.filter((member) => member.level === level);
    };
    return (
        <>
            <LayOut>
                <section className="about-section text-center p-3">
                    <div className="container bg-white p-lg-5 rounded-3">
                    <div className="py-3 origin-section">
                        <p className="display-5">
                            {currentLanguage === "EN"
                                ? "WBoard of Directors of the Foundation"
                                : "คณะกรรมการของมูลนิธิฯ"}
                        </p>
                    </div>
                    <div className="committee">
                        {['1', '2', '3'].map((level) => (
                            <div key={level}>
                                <div className={`row lv-${level} justify-content-center my-2`}>
                                    {committeeLevel(level).map((member) => (
                                        member.positionEN === 'ADVISOR' ?
                                            (
                                                <div key={member.id} className="col-xl-6 col-lg-6 col-md-12 my-3">
                                                    <div className="d-flex people-list ADVISOR px-3 py-4 align-items-center">
                                                        <Image className="rounded-circle my-2" src={member.img} />
                                                        <div className="w-100  m-auto">
                                                            <h4 className=" text-uppercase ">
                                                                {member.positionEN}
                                                                {member.positionTH}
                                                            </h4>
                                                            <h6 className="bold">
                                                                {member.nameTH}
                                                            </h6>
                                                            <p className="title text-reset">
                                                                {member.detailTH}
                                                            </p>
                                                            <h4 className=" text-uppercase ">
                                                                {member.nameEN}
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) :
                                            (
                                                <div key={member.id} className="col-xl-3 col-lg-3 col-md-4 col-6 col-md-6 col-12  my-3">
                                                    <div className="p-2 w-100 people-list px-2 py-4">
                                                        <h5 className="text-uppercase bold">
                                                            {member.positionEN}
                                                            <br />
                                                            {member.positionTH}
                                                        </h5>
                                                        <Image className="rounded-circle my-2" src={member.img} alt={member.nameEN} />
                                                        <div className="name">
                                                            <h6 className="bold mb-0">{member.nameTH}</h6>
                                                            <p className="mb-0">{member.nameEN}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                    ))}
                                </div>
                                <hr />
                            </div>
                        ))}
                    </div>
                    {/* <Image className="w-100" src="/images/Beige-Mod.png" alt="committee" /> */}
                    </div>
                </section>
            </LayOut >
        </>
    )
}
export default Committee;
