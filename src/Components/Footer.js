import styles from '../Assets/Styles/Footer.module.scss'

function Footer() {
    return (
        <div className="container" >
            <div className={styles.footer}>
                <div className={styles.title}>
                    <p>The Green</p>
                    <p >Belt Movement</p>
                </div>
                <div className={styles.contactUs}>
                    <p className={styles.contact}>CONTACT US</p>
                    <hr></hr>
                    <p>123 Anywhere St.</p>
                    <p>Cityname, NY 11206</p>
                    <p>(123) 456-7890</p>
                    <p>contact@npo.org</p>
                </div>
                <div className={styles.more}>
                    <p className={styles.contact}>CONTACT US</p>
                    <hr></hr>
                    <p>The issue</p>
                    <p>How we help</p>
                    <p>Get involved</p>
                    <p>Latest news</p>
                </div>
                <div className={styles.follow}>
                    <p className={styles.contact}>CONTACT US</p>
                    <hr></hr>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Medium</p>
                </div>
                <div className={styles.hashtag}>
                    <p >#stop </p>
                    <p className={styles.climate}> climate</p>
                    <p >change</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;