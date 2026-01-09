
import { useState } from 'react';
import '../../styles/Glance.css';

const Glance = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = ['commitment', 'context', 'beliefs', 'roadmap'];
    const tabLabels = ['Our Commitment', 'Our Context', 'Our Beliefs', 'Our Roadmap'];

    const nextTab = () => {
        setActiveTab((prev) => (prev + 1) % tabs.length);
    };

    const prevTab = () => {
        setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
    };

    return (
        <section className="wyreflow-section-container">

            <h1 className="wyreflow-section-title">Wyreflow at a
                Glance</h1>
            <div className="wyreflow-tab-container">
                {tabLabels.map((label, idx) => (
                    <div
                        key={idx}
                        id={`tab-${tabs[idx]}`}
                        className={`wyreflow-tab ${activeTab === idx ? 'active' : ''}`}
                        onClick={() => setActiveTab(idx)}
                    >
                        {label}
                    </div>
                ))}
            </div>
            <div className="wyreflow-content-container">

                {/* Commitment */}
                <div tab-id="Our Commitment" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                    <div id="content-commitment" className="wyreflow-content">
                        <div>
                            <h2>Fostering Lasting Connections</h2>
                            <p>We prioritize a long-term perspective,
                                cultivating lasting relationships that drive mutual
                                growth
                                and foster sustainable outcomes.</p>
                        </div>
                        <img src="/images/about-image2.png" alt="Commitment Image" />
                    </div>
                </div>


                {/* Context */}
                <div style={{ display: activeTab === 1 ? 'block' : 'none' }} tab-id="Our Context">
                    <div id="content-context" className="wyreflow-content">
                        <div>
                            <h2>Shaping Future-Focused
                                Relationships</h2>
                            <p>We prioritize enduring partnerships
                                that drive innovation, growth, and long-term success for
                                all involved.</p>
                        </div>
                        <img src="/images/about-image3.png" alt="Context Image" />
                    </div>
                </div>


                {/* Beliefs */}
                <div style={{ display: activeTab === 2 ? 'block' : 'none' }} tab-id="Our Beliefs">
                    <div id="content-beliefs" className="wyreflow-content">
                        <div>
                            <h2>Committed to the Impact We Have on
                                Every Life</h2>
                            <p>Our guiding beliefs in integrity,
                                excellence, and innovation drive our commitment to
                                achieving impactful results and building lasting trust.</p>
                        </div>
                        <img src="/images/about-image4.png" alt="Beliefs Image" />
                    </div>
                </div>

                {/* Roadmap */}
                <div style={{ display: activeTab === 3 ? 'block' : 'none' }} tab-id="Our Roadmap">
                    <div id="content-roadmap" className="wyreflow-content">
                        <div>
                            <h2>Build and Share Knowledge
                                Pathways</h2>
                            <p>Develop comprehensive knowledge
                                pathways and facilitate their dissemination, ensuring
                                seamless access to critical insights and expertise across your
                                organization</p>
                        </div>
                        <img src="/images/about-image5.png" alt="Roadmap Image" />

                    </div>
                </div>
            </div>
            <div className="tab-scroller">

                <div className="tab-counter">
                    <p id="starting-tab-idx">0{activeTab + 1}</p>
                    <div></div>
                    <p>04</p>
                </div>

                <div className="left-right-btn">
                    <i className='bx bx-chevron-left' id="left-btn" onClick={prevTab}></i>
                    <i className='bx bx-chevron-right' id="right-btn" onClick={nextTab}></i>
                </div>
            </div>
        </section>
    );
};

export default Glance;
