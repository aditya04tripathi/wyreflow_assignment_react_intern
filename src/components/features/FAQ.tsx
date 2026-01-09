
import { useState } from 'react';
import '../../styles/FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does Wyreflow do?",
            answer: "Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI."
        },
        {
            question: "What is the future for Wyreflow?",
            answer: "Wyreflow is constantly innovating and expanding its services to meet the needs of both US clients and government projects."
        },
        {
            question: "How can Wyreflow help my business grow?",
            answer: "By leveraging cutting-edge technology, Wyreflow can provide tailored solutions that help businesses scale and succeed in their respective industries."
        },
        {
            question: "What industries does Wyreflow serve?",
            answer: "Wyreflow serves various industries including healthcare, finance, manufacturing, and more."
        }
    ];

    return (
        <section>
            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <span>{faq.question}</span>
                            <span className="icon"><i className='bx bx-down-arrow-alt'></i></span>
                        </div>
                        <div className="faq-answer" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
