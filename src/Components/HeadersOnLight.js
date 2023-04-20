import styles from '../Assets/Styles/HeadersOnLight.module.scss';

function HeadersOnLight() {
    return (
        <div className={`${styles.container} ${"w-100 d-flex align-items-start justify-content-around"}`}>
        <div className={`${styles.headers} ${"container d-flex"}`}>
        <div className={`${styles.ourTeam} ${"d-flex flex-column"}`}>
                    <button>OUR TEAM</button>
                    <p>Meet the team of <span>people making it happen.</span> </p>
                </div>
                <div className={styles.description}>
                    <p className="position-relative">Our leaders set our global direction, goals and strategies, and support nearly 500 team members working in more than 20 countries around <span>the world.</span></p>
                </div>
            </div>
        </div>
    );
}

export default HeadersOnLight;