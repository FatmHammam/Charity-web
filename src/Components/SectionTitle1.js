import styles from '../Assets/Styles/SectionTitle1.module.scss';

function SectionTitle1({ title3 }) {
    return (
        <div className={`${styles.container} ${"w-100 d-flex align-items-center justify-content-center"}`}>
            <div className={`${styles.section} ${!title3 ? " d-flex flex-column" : styles.containerSize}`}>
                {
                    !title3 ? <>
                        <button>WHAT WE DO</button>
                        <p>We strive for better environmental management, community empowerment, and livelihood<span> improvement using tree-planting as an entry<span>point.</span> </span></p>
                    </>
                        :
                        <>
                            <button className={styles.impactBtn}>OUR IMPACT</button>
                            <p className={styles.impact}>We invest in a better tomorrow for <span>the planet and all its people.</span></p>
                        </>
                }
            </div>
        </div>
    );
}

export default SectionTitle1;