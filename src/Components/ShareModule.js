import twi from '../Assets/Images/twi.png';
import face from '../Assets/Images/face.png';
import envelope from '../Assets/Images/envelope.png';
import text from '../Assets/Images/text.png';
import styles from '../Assets/Styles/ShareModule.module.scss';

function ShareModule({ padding, description }) {
    return (
        <div className={`${styles.thankYou} ${!description ? " " : styles.ThankYouResponsive}`} style={{ padding: padding }}>
            <div className={`${styles.share} ${!description ? " " : styles.shareResponsive}`}>
                <button>SHARE</button>
                {
                    !description ? <div className={styles.extract}>
                        <p>“ I just donated to The Green Trees Initiative to help support families and fight climate <span>change.Won’t <span>you join me?"</span></span></p>
                        <div className={styles.brands}>
                            <div className={styles.brand}>
                                <img src={twi} alt="" />
                                <p>TWITTER</p>
                            </div>
                            <div className={styles.brand}>
                                <img src={face} alt="" />
                                <p>FACEBOOK</p>
                            </div>
                            <div className={styles.brand}>
                                <img src={envelope} alt="" />
                                <p>EMAIL</p>
                            </div>
                            <div className={styles.brand}>
                                <img src={text} alt="" />
                                <p>TEXT</p>
                            </div>
                        </div>
                    </div>
                        :
                        <p className={styles.responsivQoute} >We are an environmental organization that empowers communities, particularly women, to conserve the <span>environment and improve  <span>livelihoods.</span></span></p>
                }
            </div>
        </div>
    );
}

export default ShareModule;