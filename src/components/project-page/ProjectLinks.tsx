/**
 * ProjectLinks
 *
 * This component renders a list of links for a project.
 * Each link is represented by an svg icon.
 * The links are fetched from the project's metadata.
 * The component takes a prop `links` which is an object
 * with keys being the link type and values being the href.
 * The component also takes a prop `getIcon` which is a function
 * that takes a link type and returns the corresponding svg icon.
 *
 * @component ProjectLinks.tsx
 * @param {ProjectProps['links']} links - The props to be passed to the component.
 * @returns {JSX.Element} A JSX element representing the Certificates component.
 */

import { ProjectProps } from './projects/types/project.interface';
import { JSX } from 'react';

export const ProjectLinks = (links: ProjectProps['links']): JSX.Element => {
    
    // This function takes a link type and returns the corresponding svg icon.
    const getIcon = (linkType: string): JSX.Element | null => {
        switch (linkType) {
            case 'github':
                return (
                    <svg
                        className="hover:fill-cyan-500 fill-white h-5 w-5 my-2 lg:h-8 lg:w-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 480 512"
                    >
                        <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                    </svg>
                );
            case 'live':
                return (
                    <svg
                        className="hover:fill-cyan-500 fill-white h-4 w-4 lg:h-8 lg:w-6 my-2"
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M7.834,16.169c-.557-.557-.975-1.207-1.281-1.901l1.57-1.57c.175,.761,.548,1.48,1.125,2.057,.803,.803,1.87,1.245,3.005,1.245s2.203-.442,3.005-1.245l5.5-5.5c.803-.803,1.245-1.87,1.245-3.005s-.442-2.203-1.245-3.005c-1.657-1.657-4.352-1.657-6.01,0h0l-1.005,1.006c-.644-.159-1.309-.25-1.99-.25-.208,0-.413,.015-.618,.03l2.199-2.199h0c2.437-2.438,6.402-2.438,8.839,0,2.437,2.437,2.437,6.402,0,8.839l-5.5,5.5c-1.18,1.181-2.75,1.831-4.419,1.831s-3.239-.65-4.419-1.831ZM.003,17.75c0,1.669,.65,3.239,1.831,4.419,1.18,1.181,2.749,1.831,4.419,1.831s3.239-.65,4.419-1.831l2.2-2.2c-.205,.015-.411,.03-.618,.03-.681,0-1.346-.091-1.99-.25l-1.006,1.006c-.803,.803-1.87,1.245-3.005,1.245s-2.202-.442-3.004-1.244h0c.577,.578,.95,1.297,1.125,2.058l1.57-1.57c-.306-.694-.724-1.344-1.281-1.901h0c-1.18-1.181-2.75-1.831-4.419-1.831s-3.239,.65-4.419,1.831L1.834,13.331C.653,14.511,.003,16.081,.003,17.75Z" />
                    </svg>
                );
            case 'npm':
                return (
                    <svg
                        className="hover:fill-cyan-500 fill-white h-9 w-9 lg:h-10 lg:w-10 lg:my-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                    >
                        <path d="M288 288h-32v-64h32v64zm288-128v192H288v32H160v-32H0V160h576zm-416 32H32v128h64v-96h32v96h32V192zm160 0H192v160h64v-32h64V192zm224 0H352v128h64v-96h32v96h32v-96h32v96h32V192z" />
                    </svg>
                );
            default:
                return null;
        }
    };
    return (
        <div className="flex gap-4 lg:gap-2">
            {Object.entries(links).map(([linkType, href]) => {
                if (!href) {
                    return null;
                }
                return (
                    <a
                        key={linkType}
                        className="text-slate-200"
                        href={href}
                        target="_blank"
                        aria-label={linkType}
                    >
                        {getIcon(linkType)}
                    </a>
                );
            })}
        </div>
    );
};
