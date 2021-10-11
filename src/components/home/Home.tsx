import React from 'react';
import Welcome from './components/Welcome';
import PropsSection from './components/PropsSection';
import emotionTitle from './textfiles/emotionTitle'
import emotionText from './textfiles/emotionText'
import attributesTitle from './textfiles/attributesTitle'
import attributesText from './textfiles/attributesText'
import AuthorsSection from './components/AuthorsSection';

export default function Home() {
    return (
        <div>
            <div>
                <Welcome/>
            </div>
            <div>
                <PropsSection align='left' title={emotionTitle} text={emotionText}/>
            </div>
            <div>
                <PropsSection align='right' title={attributesTitle} text={attributesText}/>
            </div>
            <div>
                <AuthorsSection />
            </div>
        </div>
    );
};
