import { PopoverProps } from '../interfaces/popover.interface';

export const Popover = ({ children, content }: PopoverProps) => {
    return (
        <div className="group relative">
            <div
                className="group-hover:block hidden absolute bottom-[70%] left-[100%]
             z-10 w-20 transition-all bg-transparent shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]"
            >
                {content}
            </div>
            {children}
        </div>
    );
};
