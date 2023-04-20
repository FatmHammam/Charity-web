import styles from '../Assets/Styles/Banner2.module.scss'

function Banner2() {
    return (
        <div className={`${styles.banner1} ${"w-100"}`}>
            <div className={`${styles.container} ${"mx-auto d-flex position-relative px-5"}`}>
                <div className={`${styles.hashtag} ${"position-relative"}`} >
                    <p className="text-white m-0">#stop</p>
                    <p className={`${styles.climate} ${"text-white m-0 position-relative"}`} >climate</p>
                    <p className="text-white m-0">change</p>
                </div>
                <div className={`${styles.theIssue} ${"bg-white d-flex flex-column"}`}>
                    <button className="text-white position-relative mb-5 border-0">THE ISSUE</button>
                    <p className=''>We are an environmental organization that empowers communities, particularly women, to conserve the <span>environment and improve</span></p>
                </div>
            </div>
        </div>
    );
}

export default Banner2;
