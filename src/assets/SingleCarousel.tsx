import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type Certificates = {
    certificates: CertificateProps[]
}

type CertificateProps = {
    name: string
    date: string
    img: string
    link: string
}

export const SingleCarousel = ({ certificates }: Certificates) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
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
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div className="">
            <Slider {...settings}>
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
    )
}
