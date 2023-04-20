import styles from '../Assets/Styles/Investment.module.scss';

function Investment() {
    return (
        <div className={`${styles.container} ${"w-100 min-vh-100 d-flex flex-column align-items-center justify-content-evenly"}`}>
            <div className={`${styles.headers} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                <div className={`${styles.ourContact} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                    <button className='border-0'>OUR TEAM</button>
                    <p className='text-white'>We invest in a better tomorrow for <span>the planet and all its people.</span> </p>
                </div>

                <div className={`${styles.description} ${"container d-flex align-items-center justify-content-center"}`}>
            <div className={`${styles.details} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                    <span className='text-white'>50</span>
                    <p className='text-white'>million trees planted <span>in deforested areas</span></p>
                </div>
                <div className={`${styles.details} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                    <span className='text-white'>200</span>
                    <p className='text-white'>women employed in communities</p>
                </div>
                <div className={`${styles.details} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                    <span className='text-white'>25,000</span>
                    <p className='text-white'>volunteers have been mobilized</p>
                </div>
                <div className={`${styles.details} ${"d-flex flex-column align-items-center justify-content-center"}`}>
                    <span className='text-white'>150</span>
                    <p className='text-white'>different chapters internationally</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Investment;