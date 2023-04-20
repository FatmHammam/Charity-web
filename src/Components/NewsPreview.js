import meeting from '../Assets/Images/meeting.png';
import tree from '../Assets/Images/tree.png';
import styles from '../Assets/Styles/NewsPreview.module.scss';

function NewsPreview() {
    return (
        <div className={`${styles.container} ${"min-vh-100 w-100 d-flex align-items-center justify-content-center"}`}>
            <div className={`${styles.newsPreview} ${"container"}`}>
                <div className={`${styles.communityTree} ${"d-flex"}`}>
                    <img src={tree} alt="" />
                    <div className={`${styles.community} ${"d-flex flex-column position-relative"}`}>
                        <button className={`${styles.event} ${"border-0"}`}>EVENT</button>
                        <p className='text-white'>Earth Day 2018 community tree <span>planting event</span></p>
                        <span className='position-relative text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh.<span> Curabitur in tortor lorem.</span></span>
                        <button className={`${styles.readMore} ${"border-0"}`}>Read more</button>
                    </div>
                </div>

                <div className={`${styles.communityTree} ${"d-flex"} ${styles.responsive}`}>
                    <img src={meeting} alt="" />

                    <div className={`${styles.community} ${"d-flex flex-column position-relative"}`}>
                        <button className={`${styles.event} ${"border-0"}`}>EVENT</button>
                        <p className='text-white'>Updates from the fall quarterly<span> meeting </span></p>
                        <span className='position-relative text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet. Aliquam sed nisl porttitor nisl laoreet semper nec iaculis nibh.<span> Curabitur in tortor lorem.</span></span>
                        <button className={`${styles.readMore} ${"border-0"}`}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsPreview;