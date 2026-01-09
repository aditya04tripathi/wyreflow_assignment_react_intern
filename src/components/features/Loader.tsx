
import { useEffect, useState } from 'react';
import '../../styles/Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        // Check if window is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, 1500); // 1.5s transition
            return () => clearTimeout(timer);
        }
    }, [loading]);

    if (!visible) return null;

    return (
        <div className={`loader-box ${!loading ? 'loader-box-hidden' : ''}`}>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;
