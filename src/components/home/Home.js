import React from 'react';
import PropsSection from './components/PropsSection';

export default function Home() {
    return (
        <div>
            <div>
                <PropsSection align='left' />
            </div>
            <div>
                <PropsSection align='right' />
            </div>
        </div>
    );
};
