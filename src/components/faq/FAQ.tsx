import React from 'react';
import FaqComponent from './components/faqComponent';
import FaqCookie from './assets/1.png';


export default function faq() {
    return (
        <div>
            <section className="hero-container align-center">
              <div className="flex-row">
                <img src={FaqCookie} className="hero-cookie"/>
              </div>
              <h1>Frequently Asked Questions</h1>
            </section>
            <FaqComponent />
        </div>
    );
};


