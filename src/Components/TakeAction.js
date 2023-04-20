import styles from '../Assets/Styles/TakeAction.module.scss'

function TakeAction() {
    return (
        <div className={styles.takeAction}>
            <div className={styles.container}>
                <button>Take Action</button>
                <div className={styles.info}>
                    <div className={styles.details}>
                        <span>Learn</span>
                        <p>Get the facts about this issue and how we’re helping.</p>
                    </div>
                    <div className={styles.details}>
                        <span>Volunteer</span>
                        <p>Find out about upcoming events that need your help.</p>
                    </div>
                    <div className={styles.details}>
                        <span>Share</span>
                        <p>Let your social media networks know about this important cause.</p>
                    </div>
                    <div className={styles.details}>
                        <span>Donate</span>
                        <p>Help us raise money to make a big difference with this issue.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TakeAction;