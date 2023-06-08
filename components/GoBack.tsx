import { useRouter } from "next/router";
import { RiArrowGoBackLine } from 'react-icons/ri';
const GoBack: React.FC = () => {
    const router = useRouter();
    const goBack = () => {
        router.back();
    }
    return (
        <button onClick={goBack} className="btn btn-back">
            <RiArrowGoBackLine size={30} />
        </button>
    );
}

export default GoBack;
