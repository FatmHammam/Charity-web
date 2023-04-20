import styles from '../Assets/Styles/BlogDescription.module.scss';

function BlogDescription() {
    return (
        <div className={`${styles.container} ${"min-vh-100 w-100 d-flex align-items-center justify-content-center"}`}>
            <div className={styles.blog}>
                <h4>This is the title for the latest blog post this long</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus. Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu <span> erat sed ipsum. Lorem ipsum dolor.</span></p>
                <a href="">Continue reading this post</a>
            </div>
        </div>
    );
}

export default BlogDescription;