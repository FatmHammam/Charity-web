import dots from '../Assets/Images/dots.png';
import lady from '../Assets/Images/lady.png';
import styles from '../Assets/Styles/Stories.module.scss';

function Stories() {

    return (
        <div className={`${styles.container} ${"w-100 d-flex align-items-center justify-content-center "}`}>
            <div className={`${styles.stories} ${"container d-flex align-items-center justify-content-center"}`}>
                <div className={styles.story}>
                    <button className="text-white position-relative">STORIES</button>
                    <img src={lady} alt="" />
                </div>
                <div className={`${styles.info} ${"d-flex flex-column position-relative"}`}>
                    <div className={`${styles.descriptionContainer} ${"d-flex position-relative"}`}>
                        <img className="position-relative" src={dots} alt="" />

                        <div className={`${styles.description} ${"d-flex flex-column position-relative"}`}>
                            <p>“I am a person who was helped by this organization. Before they gave me assistance, I was really struggling with this issue, but <span>now my life is<span>better.”</span></span>  </p>
                            <span>BALKI, FARMER AND MOTHER IN NIGER</span>
                        </div>
                    </div>

                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Stories;