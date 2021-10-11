import React from 'react';

import PropsSection from './components/PropsSection';
import emotionTitle from './textfiles/emotionTitle.js'
import emotionText from './textfiles/emotionText.js'
import attributesTitle from './textfiles/attributesTitle.js'
import attributesText from './textfiles/attributesText.js'

export default function Home() {
    return (
        <div>
            <div>
                <PropsSection align='left' title={emotionTitle} text={emotionText}/>
            </div>
            <div>
                <PropsSection align='right' title={attributesTitle} text={attributesText}/>
            </div>
        </div>
    );
};
