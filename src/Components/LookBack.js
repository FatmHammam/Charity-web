import History from '../Components/History'
import styles from '../Assets/Styles/LookBack.module.scss';
import arrow from '../Assets/Images/arrow.png'

function LookBack() {
    return (
        <div className={`${styles.container} ${" min-vh-100 d-flex flex-column align-items-center justify-content-evenly"}`}>
            <div className={`${styles.headers} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                <div className={`${styles.ourContact} ${"d-flex align-items-start justify-content-between"}`}>
                    <p className='text-white'> TAKE A LOOK BACK AT WHERE WE’VE BEEN </p>
                    <img src={arrow} alt='' />
                </div>
            </div>
            <div className={`${styles.description} ${"d-flex "}`}>
                <History />
                <History />
                <History />
            </div>
        </div>
    );
}

export default LookBack;