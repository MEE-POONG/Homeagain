import LayOut from "../../components/LayOut";

export default function SupportUsPage() {
    return (
        <>
            <LayOut>
                <div className="supportus-page container-fluid py-5 mb-5" data-wow-delay="0.1s">
                    <div className="container text-center py-5">
                        <h1 className="display-3 mb-5">ร่วมสนับสนุนมูลนิธิฯ</h1>
                    </div>
                    <div className="container">
                        <h2 className="mb-5">วิธีให้ความช่วยเหลือสนับสนุนมูลนิธิฯ</h2>
                        <div className="row mb-5 box">
                            <div className="col-lg-6 " data-wow-delay="0.1s">
                                <img className=" w-75" src="/images/pic1.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-7 boxdetail">
                                <h1 className="display-5 mb-4">ร่วมเป็นจิตอาสา</h1>
                                <p className="mb-4">โครงการนี้เริ่มขึ้นจากการรวมตัวกับเพื่อนๆ คนรักสัตว์ตั้งเป็นกลุ่มเล็กๆ  ชื่อ “กลุ่มเพื่อนข้างถนน เพื่อจิตอาสา โคราช”  เป็นการรวมตัวเพื่อนๆ จากหลากหลายสาขาอาชีพ  กลุ่มเราตั้งขึ้นมาเพราะอยากจะทำอะไรช่วยเหลือสังคมในแบบที่เรารักและถนัด  และทำไหว  ทำงานอาสานี้ในเวลาว่าง</p>
                            </div>
                        </div>
                        
                        <div className="row mb-5 box ">
                            <div className="col-lg-6 " data-wow-delay="0.1s">
                                <img className="w-75" src="/images/pic1.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-7 boxdetail">
                                <h1 className="display-5 mb-4">ร่วมบริจาคสิ่งของจำเป็น</h1>
                                <p className="mb-4">โครงการนี้เริ่มขึ้นจากการรวมตัวกับเพื่อนๆ คนรักสัตว์ตั้งเป็นกลุ่มเล็กๆ  ชื่อ “กลุ่มเพื่อนข้างถนน เพื่อจิตอาสา โคราช”  เป็นการรวมตัวเพื่อนๆ จากหลากหลายสาขาอาชีพ  กลุ่มเราตั้งขึ้นมาเพราะอยากจะทำอะไรช่วยเหลือสังคมในแบบที่เรารักและถนัด  และทำไหว  ทำงานอาสานี้ในเวลาว่าง</p>
                            </div>
                        </div>

                        <div className="row mb-5 box">
                            <div className="col-lg-6 " data-wow-delay="0.1s">
                                <img className="w-75" src="/images/pic1.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-md-7 boxdetail">
                                <h1 className="display-5 mb-4">ร่วมบริจาคเงินทำบุญ</h1>
                                <p className="mb-2">ร่วมบริจาคเงิน เพื่อช่วยสนับสนุนค่าใช้จ่าย ในการดูแลสุนัข อาทิ ค่าอาหาร ค่ายารักษาฯ</p>
                                <p><strong>ช่องทางการบริจาค</strong></p>
                                <p>บัญชีธนาคารกรุไทย ชื่อบัญชี <strong>มูลนิธิบ้านหลังใหม่</strong></p>
                                <p>เลขที่ <strong>679-3-47783-8</strong></p>
                            </div>
                        </div>

                    </div>

                </div>
            </LayOut>
        </>
    )
}