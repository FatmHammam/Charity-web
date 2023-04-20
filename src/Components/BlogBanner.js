import f from '../Assets/Images/f.png'
import y from '../Assets/Images/y.png'
import i from '../Assets/Images/i.png'
import s from '../Assets/Images/s.png'
import t from '../Assets/Images/t.png'
import blog from '../Assets/Images/blog.png'
import styles from '../Assets/Styles/BlogBanner.module.scss'

function BlogBanner() {
    return (
        <div className={styles.container}>
            <div className={`${styles.BlogBanner} ${" mx-auto d-flex flex-column position-relative align-items-center"}`}>
                <div className={`${styles.latestPost} ${"mx-auto d-flex  position-relative mt-4 justify-content-between"}`}>
                    <div className={`${styles.follow} ${"d-flex"}`}>
                        <span className='mr-25'>FOLLOW US</span>
                        <div className={styles.social}>
                            <img src={f} alt="" />
                            <img src={y} alt="" />
                            <img src={i} alt="" />
                            <img src={s} alt="" />
                            <img src={t} alt="" />
                        </div>
                    </div>
                    <p className="position-relative text-white">LATEST POST</p>
                </div>
                <div className={`${styles.post} ${"d-flex align-items-center justify-content-between mb-2"}`}>
                    <div className={`${styles.info} ${"d-flex flex-column justify-content-around"}`} >
                        <p>This is the title for the latest blog<span> post this long</span></p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus. Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu <span>erat sed ipsum. Lorem ipsum dolor.</span></span>
                        <a href='#'>Continue reading this post</a>
                    </div>
                    <img src={blog} alt=" " />
                </div>
            </div>
        </div>
    );
}

export default BlogBanner;