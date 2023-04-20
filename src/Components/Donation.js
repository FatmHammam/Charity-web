import dot from '../Assets/Images/dot.png';
import ellips from '../Assets/Images/ellips.png';
import { useNavigate } from "react-router-dom";
import styles from '../Assets/Styles/Donation.module.scss';

function Donation() {
    const navigate = useNavigate();

    const goToInfoForm = () => {
        navigate("/donation2");
    }

    return (
        <div className={`${styles.container} ${"w-100 "}`}>
                        <div className={styles.guid}>
                <p className='text-white'>We can Save the future</p>
            </div>

            <div className={`${styles.donation} ${"d-flex flex-column align-items-start justify-content-evenly"}`}>
                <p className='text-white position-relative'>Choose a donation <span>amount</span></p>
                <div className={`${styles.prices} ${"w-100 d-flex flex-column align-items-center justify-content-evenly"}`}>
                    <div className={`${styles.ten} ${"w-100 d-flex justify-content-around"}`}>
                        <div className={`${styles.selection} ${"d-flex justify-content-between align-items-center"}`}>
                            <img className={styles.tenImg} src={dot} alt="" />
                            <p className='text-white position-relative'>$10</p>
                        </div>
                        <span className='text-white'>Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh. <span>Vitae vestibulum.</span></span>
                    </div>

                    <div className={`${styles.twentyFive} ${"w-100 d-flex justify-content-around"}`}>
                        <div className={`${styles.selection} ${"d-flex justify-content-between align-items-center"}`}>
                            <img src={ellips} alt="" />
                            <p>$25</p>
                        </div>
                        <span >Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh.<span> Vitae vestibulum.</span></span>
                    </div>

                    <div className={`${styles.fifty} ${"w-100 d-flex justify-content-around"}`}>
                        <div className={`${styles.selection} ${"d-flex justify-content-between align-items-center"}`}>
                            <img src={ellips} alt="" />
                            <p>$50</p>
                        </div>
                        <span >Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh.<span> Vitae vestibulum.</span></span>
                    </div>
                </div>
                <a href=''>Enter a custom donation amount</a>
                <p className='text-white'>Choose a donation <span>frequency</span></p>
                <div className={`${styles.times} ${"w-100 d-flex justify-content-between align-items-center"}`}>
                    <div className={`${styles.monthly} ${"d-flex align-items-center"}`}>
                        <img src={dot} alt="" />
                        <span className='text-white position-relative'>Monthly</span>
                    </div>

                    <div className={`${styles.oneTime} ${"d-flex align-items-center"}`}>
                        <img src={ellips} alt="" />
                        <span className='position-relative'>One time</span>
                    </div>

                </div>
                <div className={`${styles.checkout} ${"w-100 d-flex align-items-center justify-content-between"}`}>
                    <a href="">Cancel</a>
                    <button className='border-0' onClick={goToInfoForm}>Go to checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Donation;