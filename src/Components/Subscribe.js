import styles from '../Assets/Styles/Subscribe.module.scss'

function Subscribe() {
    return (
        <div className={styles.subscribe}>
            <div className={styles.container}>
                <p>Subscribe to our monthly newsletter and <span>stay up to date with all news and events.</span></p>
                <div className={styles.email}>
                    <input type="text" placeholder='Enter your email address' />
                    <button>Read more</button>
                </div>
            </div>
        </div>
    );
}

export default Subscribe;