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
            <div className="container-xxl py-5 mt-5">
                <h2 className="text-center text-lg-start">ทำความรู้จัก น้องถั่วแดง</h2>
                <div className="container text-center">
                    <img className="w-25" src={dogItem?.image} alt="" />
                </div>
                <div className="text-center mt-5" data-wow-delay="0.3s">
                    <p className="mb-4">{dogItem?.story}</p>
                </div>

                <p className="p-3">**เมื่อท่านทำการรับอุปการะน้อง{dogItem?.dogName}ไปแล้ว ทางเราหวังเป็นอย่างยิ่งว่าท่านจะมอบความรับ และความเอาใจใส่ต่อน้อง และทางเราจะขอติดตามสอบถามข่าวสารของน้องเป็นระยะ</p>
            
            <div className="text-center">
                <a href={"formRequest/" + dogItem?.id } > <Button> ต้องการอุปการะ </Button></a>
            </div>
            </div>
            
        </LayOut>
    )

}