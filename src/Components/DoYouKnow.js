import FactModule from './FactModule';
import styles from '../Assets/Styles/DoYouKnow.module.scss';

function DoYouKnow() {
    return (
        <div className={`${styles.container} ${"w-100 "}`}>
            <div className={`${styles.title} ${""}`} >
                <p className={`${styles.climate} ${"text-white display-5"}`}>climate</p>
                <p className="text-white display-5"> change</p>
                <p className="text-white display-5"> Is a Hunger </p>
                <p className="text-white display-5"> Issue</p>
                <button className={`${styles.takeAction} ${"border-0 position-relative"}`}>Take Action</button>
            </div>
            <div className={styles.fact}>
                <FactModule title={'3 out of 4'}
                    button={<button className={`${styles.btn} ${" text-white border-0 position-relative"}`}>DID YOU KNOW?</button>}
                />
                <br />
                <FactModule title={'3 out of 4'}
                />
                <br />
                <FactModule title={'30%'}
                />
                <br />

                <FactModule title={'200 million +'}
                />
            </div>
        </div>
    );
}

export default DoYouKnow;