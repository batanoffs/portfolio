/**
 * SingleCarousel
 *
 * This component renders a single carousel element.
 * It is used by the Certificates component to render a carousel of certificates.
 *
 * @component SingleCarousel.tsx
 * @param {CertificateProps} props - The props for the SingleCarousel component, including:
 *   - certificates: The array of certificates to display.
 * @returns {JSX.Element} - The rendered SingleCarousel component.
 */

import Slider from 'react-slick';
import { CertificateProps } from './certificate.interface';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const SingleCarousel = ({ certificates }: CertificateProps) => {

    // Define settings object to setup the Slider from react-slick library
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,

        // At a breakpoint of 1024px, show 1 slide, scroll 1 slide at a time, show dots, and set the initial slide to 1.
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            
            // At a breakpoint of 600px, show 1 slide, scroll 1 slide at a time, and set the initial slide to 1.
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            
            // At a breakpoint of 480px, show 1 slide, scroll 1 slide at a time.
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // Return the JSX
    return (
        <div className="">

            {/* Render the Slider component from react-slick */}
            <Slider {...settings}>

                {/* Map over the certificates array and render a div for each certificate */}
                {certificates.map((certificate) => (
                    <div
                        key={certificate.name}
                        className="w-full max-w-[600px] p-2 lg:p-6 mx-auto rounded-lg bg-slate-600/50 shadow-lg"
                    >
                        <a href={certificate.link} target="_blank">
                            <img src={certificate.img} alt={certificate.name} className="w-full" />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

