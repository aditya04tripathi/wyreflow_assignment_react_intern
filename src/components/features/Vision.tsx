
import { useState } from 'react';
import '../../styles/Vision.css';

const Vision = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const items = ['Vision', 'Purpose', 'Value'];

    const handleItemClick = (index: number) => {
        setActiveIndex(index);
    };

    const nextItem = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevItem = () => {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    return (
        <section>
            <div className="container">
                {/* -- */}
                <div className="arrow-btn">
                    <img src="/images/about-leftarrow.png" id="left-arrow" onClick={prevItem} alt="Left Arrow" />
                    <img src="/images/about-rightarrow.png" id="right-arrow" onClick={nextItem} alt="Right Arrow" />
                </div>
                <div className="text-section-content">

                    <div className="text-section-container">
                        {items.map((item, index) => (
                            <div
                                key={item}
                                id={item.toLowerCase()}
                                className={`text-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="img-content-container">

                        {/* Vision */}
                        <div className="content" content-id="Vision" style={{ display: activeIndex === 0 ? 'block' : 'none' }}>
                            <div className="content-box">

                                <div className="image-container">
                                    <img id="image" src="/images/about-image-03.png" alt="Vision Image" />
                                </div>

                                <div className="content-para">
                                    <p>We will continue to Rise to be an
                                        agile, customer-centric, and purpose-led company,
                                        delivering best-in-class technology solutions to our stakeholders.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Purpose */}
                        <div className="content" content-id="Purpose" style={{ display: activeIndex === 1 ? 'block' : 'none' }}>
                            <div className="content-box">

                                <div className="image-container">
                                    <img id="image" src="/images/about-perpose.png" alt="Purpose Image" />
                                </div>

                                <div className="content-para">
                                    <p>At Wyreflow, our vision is to lead the
                                        digital transformation journey by delivering
                                        innovative solutions that empower businesses to thrive in a dynamic world. We
                                        aim to
                                        drive growth, efficiency, and sustainability through cutting-edge technology
                                        and
                                        strategic insights.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Value */}
                        <div className="content" content-id="Value" style={{ display: activeIndex === 2 ? 'block' : 'none' }}>
                            <div className="content-box">

                                <div className="image-container">
                                    <img id="image" src="/images/about-vision.png" alt="Value Image" />
                                </div>

                                <div className="content-para">
                                    <p>Wyreflow is built on innovation,
                                        integrity, and long-term partnerships. We’re
                                        committed to delivering sustainable, impactful solutions while fostering
                                        continuous
                                        learning and collaboration, ensuring our clients stay ahead in the
                                        ever-evolving
                                        digital world.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Vision;
