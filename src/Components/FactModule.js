import t from '../Assets/Images/t.png';
import f from '../Assets/Images/f.png';
import styles from '../Assets/Styles/FactModule.module.scss';

function FactModule({title, button}) {
    return (
        <div className={`${styles.container} ${"w-100 d-flex align-items-center justify-content-center"}`}>
                 <div className={`${styles.fact} ${"d-flex align-items-center justify-content-center"}`}>
                 <div className={styles.description}>
                    {button}
                    <h4>{title}</h4>
                    <p>People living in poverty depend <span>on  agriculture for survival.</span></p>
                </div>
                <div className={`${styles.brand} ${"d-flex flex-column"}`}>
                    <img src={t} alt="" />
                    <img src={f} alt="" />
                </div>
            </div>
        </div>
    );
}

export default FactModule;