import p1 from '../Assets/Images/p1.png';
import p2 from '../Assets/Images/p2.png';
import p3 from '../Assets/Images/p3.png';
import p4 from '../Assets/Images/p4.png';
import p5 from '../Assets/Images/p5.png';
import p6 from '../Assets/Images/p6.png';
import styles from '../Assets/Styles/Team.module.scss'

function Team() {
    return (
        <div className={`${styles.container} ${"w-100 min-vh-100"}`}>
            <div className={`${styles.team} ${"container d-flex flex-wrap align-items-center"}`}>
                <div className={styles.teamMember}>
                    <img src={p1} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>
                <div className={styles.teamMember}>
                    <img src={p2} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>

                <div className={styles.teamMember}>
                    <img src={p3} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>

                <div className={styles.teamMember}>
                    <img src={p4} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>

                <div className={styles.teamMember}>
                    <img src={p5} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>

                <div className={styles.teamMember}>
                    <img src={p6} alt="" />
                    <div className={`${styles.title} ${"w-75"}`}>
                        <p className='position-relative text-white'>Person Name, Title Goes Here</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;