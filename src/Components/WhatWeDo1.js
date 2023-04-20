import lady2 from '../Assets/Images/lady2.png';
import claudine from '../Assets/Images/claudine.png';
import styles from '../Assets/Styles/WhatWeDo1.module.scss';

function WhatWeDo1() {
    return (
        <div className={`${styles.container} ${"w-100 min-vh-100"}`}>
            <div className={`${styles.whatWeDo} ${"w-75 d-flex flex-column"}`}>
                <div className={`${styles.stories} ${"d-flex justify-content-between"}`}>
                    <div className={`${styles.ourWork} ${"d-flex flex-column"}`}>
                        <h3 className='text-white'>STORIES OF OUR WORK</h3>
                        <button className='border-0'>CLAUDINE, NIGERIA</button>
                        <div className={styles.names}>
                            <p className='position-relative text-white'>ZAINAB, NIGERIA</p>
                            <p className='position-relative text-white'>CARITAS, RWANDA</p>
                            <p className='position-relative text-white'>EUPHRASIE, RWANDA</p>
                            <p className='position-relative text-white'>UNIS, SUDAN</p>
                            <p className='position-relative text-white'>REGINA, SUDAN</p>
                        </div>
                    </div>
                    <img src={lady2} className='position-relative' alt="" />
                </div>
                <div className={`${styles.info} ${"d-flex justify-content-between"}`}>
                    <div className={`${styles.intro} ${"d-flex flex-column align-items-center justify-content-between"}`}>
                        <div className={`${styles.introduction} ${"w-100 d-flex align-items-center justify-content-center position-relative"}`}>
                            <p className='w-75'>“ Donec felis nunc, cursus molestie odio ut, aliquet euismod libero. Etiam ipsum nibh, interdum et consequat et, tincidunt quis sem. <span>Suspendisse lobortis rises et.”</span></p>
                        </div>
                        <img src={claudine} alt="" />

                    </div>
                    <div className={`${styles.details} ${"d-flex flex-column align-items-start"}`}>
                        <p className='text-white'>Claudine, Nigeria</p>
                        <span className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec aliquet nunc, id consectetur lorem. Donec pretium est sed ornare bibendum. In tincidunt lacus vitae ullamcorper euismod. Praesent laoreet dui mattis, consectetur elit at, tincidunt magna. Aenean feugiat arcu ante, id pharetra tortor accumsan ut.</span>
                        <span className='text-white'>Aliquam pellentesque nulla congue aliquam viverra. Ut cursus sollicitudin metus nec tristique. Sed eget elementum quam, non mollis orci. Aliquam dignissim, augue ac pretium suscipit, eros enim fermentum ante, et congue lectus metus nec dui. Nunc et ipsum aliquam, sodales mi eu, varius odio. Proin porta nulla nec ex blandit, nec ornare lorem ullamcorper. </span>
                        <button className='position-relative border-0' >Next story</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeDo1;