import { PropsWithChildren } from 'react';

export const SideLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div
            className="lg:sticky lg:top-0 lg:flex gap-8 lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-start lg:py-24
                        md:top-0 md:flex md:max-h-screen md:flex-col md:justify-start
                        flex max-h-screen flex-col justify-start"
        >
            {children}
        </div>
    );
};
