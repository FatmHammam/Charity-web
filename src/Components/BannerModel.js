import styles from '../Assets/Styles/BannerModel.module.scss'

function BannerModel() {
    return (
        <div className={styles.bannerModel}>
            <div className={`${styles.banner} ${"container min-vh-100 mx-auto  position-relative "}`}>
                <div className={`${styles.container} ${"w-25 h-25"}`} >
                    <p className="text-white display-5">#stop</p>
                    <p className={`${styles.climate} ${"text-white display-5"}`}>climate</p>
                    <p className="text-white display-5"> change</p>
                </div>
                <div className={`${styles.theIssue} ${"bg-white d-flex flex-column position-relative"}`}>
                    <button className={`${styles.btn} ${" text-white border-0 position-relative"}`}>THE ISSUE</button>
                    <p className="position-relative">Climate change poses the biggest threat to women in<span>developing nations.</span></p>
                    <div className={` ${styles.links} ${"w-100"}`}>
                        <a href='#'>Read more about this environmental and </a>
                        <a href='' className={styles.link}>social cause</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerModel;
