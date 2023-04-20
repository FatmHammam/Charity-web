import history from '../Assets/Images/history.png';
import arrow from '../Assets/Images/arrow.png';
import { useEffect, useState } from 'react';
import styles from '../Assets/Styles/History.module.scss';

function History() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <div className={`${styles.container} ${" min-vh-100 d-flex flex-column align-items-center justify-content-center"}`}>
            <button className={`${styles.year} ${"border-0 position-relative"}`}>2018</button>
            <div className={`${styles.history} ${"d-flex flex-column  justify-content-between"}`}>
                <img className='w-100' src={history} alt="" />
                {windowSize.innerWidth < 414.40 &&
                    <img className={`${styles.arrow} ${"position-relative"}`} src={arrow} alt="" />
                }
                <div className={`${styles.details} ${"w-100 d-flex flex-column"}`}>
                    <p className='position-relative'>Training to rural women and community-based <span>organizations</span></p>
                    <span className={`${styles.lorem} ${"position-relative"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor.</span>
                    <button className={`${styles.readMore} ${"position-relative border-0"}`}>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default History;