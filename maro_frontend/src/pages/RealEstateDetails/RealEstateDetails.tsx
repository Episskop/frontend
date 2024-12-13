import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import PopupQuiz from "../Main/popUpQuiz"; 


interface RealEstateDetailsMobileProps {
  projectData: {
    gallery: string[];
  };
  language: string;
  data: {
    title: string;
    residentialComplex: string;
    residentialComplex_eng: string;
  }[];
}

const RealEstateDetailsMobile: React.FC<RealEstateDetailsMobileProps> = ({ projectData, language, data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isPopupVisibleQuiz, setIsPopupVisibleQuiz] = useState(false);

  const sliderRef = useRef<Slider>(null);
  const sliderRef1 = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsSimilarProjects = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleNext1 = () => {
    sliderRef1.current?.slickNext();
  };

  const handleClick = () => {

  };

  const handleButtonClickQuiz = () => {
    setIsPopupVisibleQuiz(true);
  };

  const handlePopupCloseQuiz = () => {
    setIsPopupVisibleQuiz(false);
  };

  return (
    <div className="real-estate-details">
      <div className="real-estate-page-photo-gallery">
        <Slider ref={sliderRef} {...settings}>
          {projectData.gallery.map((image, index) => (
            <div key={index} className="real-estate-page-photo-gallery-item">
              <LazyLoadImage
                src={image}
                alt={`Gallery ${index}`}
                effect="blur"
                className="real-estate-page-photo-gallery-image"
              />
              <div
                className="real-estate-page-photo-gallery-overlay"
                onClick={() => openLightbox(index)}
              >
                <p>{language === "ru" ? "Посмотреть" : "View"}</p>
              </div>
            </div>
          ))}
        </Slider>
        <button className="real-estate-page-slider-button" onClick={handleNext}>
          {language === "ru" ? "Следующий" : "Next"}
        </button>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={projectData.gallery.map((image) => ({ src: image }))}
          index={photoIndex}
        />
      )}

      <div className="real-estate-page-similar-projects">
        <p className="real-estate-page-similar-projects-head para">
          {language === "ru" ? "ПОХОЖИЕ ПРОЕКТЫ" : "Similar Projects"}
        </p>
        <div className="real-estate-page-similar-projects-slider">
          <Slider ref={sliderRef1} {...settingsSimilarProjects}>
            {data.map((project, index) => (
              <div
                key={index}
                className="real-estate-page-similar-project"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={handleClick}
              >
                <LazyLoadImage
                  src={project.title}
                  alt={`Project ${index}`}
                  effect="blur"
                  className="real-estate-page-similar-project-img"
                />
                <p
                  className={`real-estate-page-similar-project-text ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}
                >
                  {language === "ru"
                    ? project.residentialComplex
                    : project.residentialComplex_eng}
                </p>
              </div>
            ))}
          </Slider>
          <button className="real-estate-page-slider-button" onClick={handleNext1}>
            {language === "ru" ? "Следующий" : "Next"}
          </button>
        </div>
      </div>

      <button
        className="real-estate-page-quiz-button"
        onClick={handleButtonClickQuiz}
      >
        {language === "ru" ? "ПРОЙТИ ВИКТОРИНУ" : "TAKE QUIZ"}
      </button>

      {isPopupVisibleQuiz && (
  <PopupQuiz
    isPopupVisibleQuiz={isPopupVisibleQuiz} 
    handlePopupCloseQuiz={handlePopupCloseQuiz}
  />
)}
    </div>
  );
};

export default RealEstateDetailsMobile;
