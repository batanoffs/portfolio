interface ProjectImageProps {
    src: string;
    alt: string;
}

export const ProjectImage = ({ src, alt }: ProjectImageProps) => (
    <img
        alt={alt}
        loading="lazy"
        width="200"
        height="48"
        decoding="async"
        style={{ color: 'transparent' }}
        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
        src={src}
        onError={(e) => {
            e.currentTarget.src = '/comingsoon2.png';
            e.currentTarget.alt = 'Project image unavailable';
        }}
    />
);
