import React from 'react';
import Welcome from './components/Welcome';
import PropsSection from './components/PropsSection';
import emotionTexts from './textfiles/emotion'
import attributesTexts from './textfiles/attributes'
import AuthorsSection from './components/AuthorsSection';

export default function Home() {
    return (
        <div>
            <div>
                <Welcome/>
            </div>
            <div>
                <PropsSection align='left' title={emotionTexts.title} text={emotionTexts.content}/>
            </div>
            <div>
                <PropsSection align='right' title={attributesTexts.title} text={attributesTexts.content}/>
            </div>
            <div>
                <AuthorsSection />
            </div>
        </div>
    );
};
