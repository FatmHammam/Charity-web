import { useEffect, useState } from 'react';
import arrowDown from '../Assets/Images/arrowDown.png';
import { useNavigate } from "react-router-dom";
import styles from '../Assets/Styles/InfoForm.module.scss';

function InfoForm() {
    const navigate = useNavigate();

    const goToCheckOut = () => {
        navigate("/donation3");
    }

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
        <div className={`${styles.container} ${"w-100 "}`}>
            <div className={styles.guid}>
                <p className='text-white'>We can Save the future</p>
            </div>
            <div className={`${styles.donation} ${"d-flex flex-column align-items-start justify-content-evenly"}`}>
                <p className='text-white position-relative' > Your information</p>
                <div className={`${styles.name} ${"w-100 d-flex align-items-center justify-content-between"}`}>
                    <div className={`${styles.first} ${"d-flex flex-column align-items-start justify-content-center"}`}>
                        <label className='text-white'>FIRST NAME</label>
                        <input className='w-100' type="text" placeholder='First name' />
                    </div>

                    <div className={styles.last}>
                        <label className='text-white'>LAST NAME</label>
                        <input className='w-100' type="text" placeholder='Last name' />                        </div>
                </div>
                <label className='text-white'>STREET ADDRESS</label>
                <input className={`${styles.input} ${"w-100"}`} type="text" placeholder='Street address' />

                <div className={`${styles.address} ${"w-100 d-flex align-items-center justify-content-between"}`}>
                    <div className={styles.city}>
                        <label className='text-white'>CITY</label>
                        <input type="text" placeholder='City name' />
                    </div>

                    <div className={styles.state}>
                        <label className='text-white'>STATE</label>
                        <div>
                            <input className={styles.arrow} type="text" placeholder='AL' />
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>

                    <div className={styles.zip}>
                        <label className='text-white'>ZIP CODE</label>
                        <input className={`${styles.input} ${"w-100"}`} type="text" placeholder={windowSize.innerWidth > 550 ? 'Zip code' : 'Zip'} />
                    </div>
                </div>
                <label className='text-white'>EMAIL ADDRESS</label>
                <input className={`${styles.input} ${"w-100"}`} type="text" placeholder='Email address' />
                <p className='text-white position-relative'>Payment information</p>
                <label className='text-white'>CREDIT CARD NUMBER</label>
                <input className={`${styles.input} ${"w-100"}`} type="text" placeholder='Credit card number' />

                <div className={`${styles.security} ${"d-flex align-items-end justify-content-between"}`} >
                    <div className={styles.expire}>
                        <label className='text-white'>EXPIRATION</label>
                        <input type="text" placeholder='MM' />
                    </div>

                    <div className={styles.year}>
                        <input className={styles.yyyy} type="text" placeholder='YYYY' />
                    </div>

                    <div className={styles.code}>
                        <label className='text-white'>SECURITY CODE</label>
                        <input type="text" placeholder='CVC' />
                    </div>
                </div>

                <p className={`${styles.guidness} ${"w-100 text-white position-relative"}`}>Click the button to confirm your donation of $10, recurring monthly.</p>

                <div className={`${styles.checkout} ${"w-100 d-flex align-items-center justify-content-between"}`}>
                    <button onClick={goToCheckOut}>Process Payment</button>
                    <a href="">Go back</a>
                </div>
            </div>
        </div>
    );
}

export default InfoForm;