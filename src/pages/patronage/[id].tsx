import { useRouter } from "next/router";
import LayOut from "../../../components/LayOut"
import { dogDetail } from "../../../data/dataTest";
import { Button } from "react-bootstrap";

export default function DogDetailTH() {
    const router = useRouter();
    const { id } = router.query;
    const dogItem = dogDetail.find(item => item.id === id);
    return (
        <LayOut>
            <div className=" container-xxl py-5 mt-5">
                <h2 className="text-lg-start">ทำความรู้จัก น้องถั่วแดง</h2>
                <div className=" text-center">
                    <img className="w-50 mt-5" src={dogItem?.image} alt="" />
                </div>

                <div className="row container mt-5 mx-auto">
                    <div className="col-lg-6 text-lg-center">
                        <p className="mb-0">ชื่อ: <strong>{dogItem?.dogName}</strong> </p>
                        <p className="mb-0">เพศ: <strong>{dogItem?.sex}</strong> </p>
                        <p className="mb-0">วัน/เดือย/ปีเกิด: <strong>{dogItem?.dateofbirth}</strong> </p>
                        <p className="mb-0">อายุ: <strong>{dogItem?.old}</strong> </p>

                    </div>
                    <div className="col-lg-6 text-start" data-wow-delay="0.3s">
                        <p className="mb-0">ลักษณะนิสัย: <strong>{dogItem?.character}</strong> </p>
                        <p className="mb-3">วันที่เข้ามาอยู่ในมูลนิธิ: <strong>{dogItem?.dateCome}</strong> </p>
                        <p className="mb-1">เรื่องราวของ{dogItem?.dogName}</p>
                        <p>{dogItem?.story}</p>
                    </div>
                </div>
                <p className="p-3"> ** ทั้งนี้เมื่อคุณเข้าร่วมเป็นพ่อ-แม่อุปถัมภ์แล้ว คุณจะได้รับข่าวของ{dogItem?.dogName}ว่าสามครั้งต่อปี ความเมตตาของคุณมีความหมายต่อน้อง รวมถึงสุนัขและแมวที่อยู่ในความดูแลของมูลนิธิฯ </p>
                <div className="text-center">
                    <a href="form-spon" > <Button> ต้องการอุปถัมภ์ </Button></a>
                </div>
            </div>
        </LayOut>
    );


}