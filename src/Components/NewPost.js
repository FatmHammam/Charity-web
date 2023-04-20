import carnval from '../Assets/Images/carnval.png';
import styles from '../Assets/Styles/NewPost.module.scss';

function NewPost() {
    return (
        <div className={`${styles.container} ${"d-flex align-items-center "}`}>
            <div className={`${styles.newPost} ${"d-flex flex-column justify-content-between "}`}>
                <img src={carnval} alt="" />
                <button className='position-relative border-0'>NEWS <span>POST</span></button>
                <p className='text-white position-relative'>Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                <a href="#" className='text-white position-relative'>Read this post</a>
            </div>
        </div>
    );
}

export default NewPost;