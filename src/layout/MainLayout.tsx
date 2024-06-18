import { PropsWithChildren } from 'react';

export const MainLayout = ({ children }: PropsWithChildren) => {
    return (
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24 ">
            {children}
        </main>
    );
};
