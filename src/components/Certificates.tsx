import { SingleCarousel } from '../assets/SingleCarousel';

type Certificates = {
    certificates: CertificateProps[];
    styles?: string;
};

type CertificateProps = {
    name: string;
    date: string;
    img: string;
    link: string;
};

export const Certificates = ({ certificates, styles }: Certificates) => {
    return (
        <section id="certificates" className={styles} aria-label="Selected certificates">
            <div
                className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75
                    px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative
                    lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0"
            >
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Certificates
                </h2>
            </div>
            <div id="content" className="w-[80%] mx-auto pb-2">
                <SingleCarousel certificates={certificates} />
            </div>
        </section>
    );
};
