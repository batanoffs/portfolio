export interface CertificateProps {
    certificates: Certificates[];
    styles?: string;
}

export interface Certificates {
    name: string;
    date: string;
    img: string;
    link: string;
}