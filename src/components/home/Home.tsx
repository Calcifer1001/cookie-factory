import React from 'react';
import Welcome from './components/Welcome';
import PropsSection from './components/PropsSection';
import { Attributes, Emotions} from '../../../src/common/resource'
import AuthorsSection from './components/AuthorsSection';

export default function Home() {
    return (
        <main>
            <section className="hero-section">
                <Welcome/>
            </section>
            <section className="props-section">
                <div>
                    <div>
                        <PropsSection align='left' title={Emotions.Title} text={Emotions.DisplayText}/>
                    </div>
                    <div>
                        <PropsSection align='right' title={Attributes.Title} text={Attributes.DisplayText}/>
                    </div>
                </div>
            </section>
            <section className="authors-section align-center ptb-120">
                <AuthorsSection />
            </section>
        </main>
    );
};
