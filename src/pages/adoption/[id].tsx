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
            <div className="featuertwo-section container-xxl py-5">
                <h2 className="text-center text-lg-start">ทำความรู้จัก น้องถั่วแดง</h2>
                <div className="container text-center">
                    <img className="w-25" src={dogItem?.image} alt="" />
                </div>
                <div className="text-center mt-5" data-wow-delay="0.3s">
                    <p className="mb-4">{dogItem?.story}</p>
                </div>

            </div>
            
            <div>
                <Button>รับอุปการะ</Button>
            </div>
        </LayOut>
    )

}