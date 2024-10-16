import { PropsWithChildren } from 'react';

export const SideLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            {children}
        </div>
    );
};
