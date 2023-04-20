import tree from '../Assets/Images/tree.png';
import education from '../Assets/Images/education.png';
import advocacy from '../Assets/Images/advocacy.png';
import styles from '../Assets/Styles/WhatWeDo.module.scss';

function WhatWeDo() {
    return (
        <div className={`${styles.container} ${"w-100"}`}>
            <div className={`${styles.new} ${"container d-flex align-items-center justify-content-between"}`}>
                <div className={`${styles.list} ${"d-flex"}`}>
                    <img src={tree} alt="" />
                    <div className={`${styles.info} ${"d-flex flex-column justify-content-evenly position-relative"}`}>
                        <p className='position-relative'>Tree Planting <span>Initiatives</span></p>
                        <span className={`${styles.lorem} ${"position-relative"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</span>
                        <button className={`${styles.readMore} ${"border-0 position-relative"}`}>Read more</button>
                    </div>
                </div>

                <div className={`${styles.list} ${"d-flex"}`}>
                    <img src={education} alt="" />
                    <div className={`${styles.info} ${"d-flex flex-column justify-content-evenly position-relative"}`}>
                        <p className='position-relative'>Education and <span>Training</span></p>
                        <span className={`${styles.lorem} ${"position-relative"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</span>
                        <button className={`${styles.readMore} ${"border-0 position-relative"}`}>Read more</button>
                    </div>
                </div>

                <div className={`${styles.list} ${"d-flex"}`}>
                    <img src={advocacy} alt="" />
                    <div className={`${styles.info} ${"d-flex flex-column justify-content-evenly position-relative"}`}>
                        <p className='position-relative'>Tree Planting <span>Initiatives</span></p>
                        <span className={`${styles.lorem} ${"position-relative"}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi felis, auctor vitae vestibulum vel, consequat eu dolor. Nam pellentesque euismod laoreet.</span>
                        <button className={`${styles.readMore} ${"border-0 position-relative"}`}>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo;