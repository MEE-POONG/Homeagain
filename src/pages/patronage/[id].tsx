import { useRouter } from "next/router";
import LayOut from "../../../components/LayOut"
import { dogDetail } from "../../../data/dataTest";
import { Button } from "react-bootstrap";

export default function DogDetail() {
    const router = useRouter();
    const { id } = router.query;
    const dogItem = dogDetail.find(item => item.id === id);


    return (
        <LayOut>
            <div className=" container-xxl py-5 mt-5">
                <h2 className="text-center text-lg-start">ทำความรู้จัก น้องถั่วแดง</h2>
                <div className="container text-center">

                    <img className="w-50" src={dogItem?.image} alt="" />
                </div>
                <div className="text-center mt-5" data-wow-delay="0.3s">
                    <p className="mb-4">{dogItem?.story}</p>
                </div>
                <p className="p-3"> ** ทั้งนี้เมื่อคุณเข้าร่วมเป็นพ่อ-แม่อุปถัมภ์แล้ว คุณจะได้รับข่าวของ{dogItem?.dogName}ว่าสามครั้งต่อปี ความเมตตาของคุณมีความหมายต่อน้อง รวมถึงสุนัขและแมวที่อยู่ในความดูแลของมูลนิธิฯ </p>

                <div className="text-center">
                    <a href="form-spon" > <Button> ต้องการอุปถัมภ์ </Button></a>
                </div>
            </div>
        </LayOut>
    );


}