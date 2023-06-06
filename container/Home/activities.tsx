import React from 'react';
import { useContext } from 'react';
import { gallery } from '../../data/dataTest';
import { LanguageContext } from '../../components/LanguageContext';

interface GalleryItem {
    img: string;
}

const Gallery: React.FC = () => {
    const { currentLanguage } = useContext(LanguageContext);

    return (
        <div className="container mt-5 text-center gallery mx-auto">
            <h3>
                {currentLanguage === "EN"
                    ? "Activity Pictures"
                    : "ภาพกิจกรรม"}
            </h3>
            <div className='container d-flex flex-wrap align-content-around justify-content-center'>
                {gallery.map((item: GalleryItem, index: number) => (
                    <div key={index} className='card-gallery m-2'>
                        <img className="img-gallery" src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
