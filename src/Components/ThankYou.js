import styles from '../Assets/Styles/ThankYou.module.scss'
import ShareModule from './ShareModule';


function ThankYou() {
    return (
        <div className={`${styles.container} ${"w-100 mx-auto d-flex flex-column align-items-center"}`}>
           <div className={`${styles.thankYou} ${" d-flex  justify-content-space-center"}`}>
                <p className='text-white position-relative'>Thank you. Your donation helps support families in <span>need and fights climate<span> change.</span></span></p>
                <ShareModule description={false} padding={"100px"} />
            </div>
        </div>
    );
}

export default ThankYou;