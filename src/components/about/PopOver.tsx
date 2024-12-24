/**
 * Popover component
 *
 * This component renders a popover element that displays content when hovered.
 * It uses the `PopoverProps` interface for its props.
 *
 * @component PopOver.tsx
 * @param {PopoverProps} props - The props for the Popover component.
 * @returns {JSX.Element} A JSX element representing the Popover component.
 */

import { PopoverProps } from './popover.interface';

export const Popover = ({ children, content }: PopoverProps) => {
    return (
        <div className="group relative">
            {/* The popover content, which is hidden by default and shown on hover */}
            <div
                className="group-hover:block hidden absolute bottom-[70%] left-[100%]
             z-10 w-20 transition-all bg-transparent shadow-[10px_30px_150px_rgba(46,38,92,0.25)] mb-[10px]"
            >
                {content}
            </div>
            {/* The children elements that will trigger the popover on hover */}
            {children}
        </div>
    );
};

