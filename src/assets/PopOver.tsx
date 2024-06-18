import { useEffect, useRef, useState } from 'react';

interface PopoverProps {
    children: React.ReactNode;
    content: React.ReactNode;
    trigger?: 'click' | 'hover';
}

export const Popover = ({ children, content, trigger = 'click' }: PopoverProps) => {
    const [show, setShow] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleMouseOver = () => {
        if (trigger === 'hover') {
            setShow(true);
        }
    };

    const handleMouseLeft = () => {
        if (trigger === 'hover') {
            setShow(false);
        }
    };

    useEffect(() => {
        /**
         * Handles a click event outside of the popover.
         * @param event The click event.
         */
        function handleClickOutside(event: MouseEvent): void {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShow(false);
            }
        }

        if (show) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            };
        }
    }, [show, wrapperRef]);

    return (
        <div
            ref={wrapperRef}
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeft}
            className="w-fit h-fit relative flex justify-center"
        >
            <div onClick={() => setShow(!show)}>{children}</div>
            <div
                hidden={!show}
                className="min-w-fit w-[200px] h-fit absolute bottom-[50%] left-[40%] z-50 transition-all"
            >
                <div className="rounded bg-transparent p-3 shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]">
                    {content}
                </div>
            </div>
        </div>
    );
};
