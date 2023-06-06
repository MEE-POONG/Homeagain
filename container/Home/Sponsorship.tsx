import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageContext';

export default function Sponsorship() {

    const { currentLanguage } = useContext(LanguageContext);

    return (
        <section className="sponsorship text-center">
            <div className='titie-tab mt-5 mb-5 title-prompt'>
                {currentLanguage === "EN"
                    ? "Supporter"
                    : "ผู้สนับสนุน"}
            </div>
            <div className='container'>
                <div className="row align-content-around">
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/5-1.png" alt="" />
                    </div>
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/6.png" alt="" />
                    </div>
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/7.png" alt="" />
                    </div>
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/8.png" alt="" />
                    </div>
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/11-1.png" alt="" />
                    </div>
                    <div className="col-md text-center mx-auto">
                        <img className="w-75 banner zoom m-2" src="/images/sponsor/Untitled-design-1-1.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
