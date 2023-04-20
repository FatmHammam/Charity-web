import { useEffect, useState } from 'react';
import styles from '../Assets/Styles/NewsModule.module.scss';
import NewPost from './NewPost';
import TreePlanting from './TreePlanting';

function NewsModule() {
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <div className={`${styles.container} ${"w-100 min-vh-100 d-flex flex-column align-items-center justify-content-center "}`}>
            {
                windowSize.innerWidth > 786 ?
                    <div className={`${styles.newsModuleWeb} ${"w-75 d-flex flex-column align-items-center justify-content-around "}`}>
                        <div className={`${styles.modules} ${"w-100 d-flex align-items-center justify-content-around "}`}>
                            <NewPost />
                            <NewPost />
                            <TreePlanting />
                        </div>

                        <div className={`${styles.modules} ${"w-100 d-flex align-items-center justify-content-around "}`}>
                            <TreePlanting />
                            <NewPost />
                            <NewPost />
                        </div>

                        <div className={`${styles.modules} ${"w-100 d-flex align-items-center justify-content-around "}`}>
                            <NewPost />
                            <TreePlanting />
                            <NewPost />
                        </div>
                    </div>
                    :
                    windowSize.innerWidth < 786 && windowSize.innerWidth > 414 ?
                        <div className={`${styles.newsModuleTablet} ${"d-flex flex-wrap"}`}>
                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <NewPost />
                                <NewPost />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <TreePlanting />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <TreePlanting />
                                <NewPost />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <TreePlanting />
                            </div>
                        </div>
                        :
                        <div className={`${styles.newsModuleMobile} ${"d-flex flex-wrap"}`}>
                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <NewPost />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <TreePlanting />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <TreePlanting />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <NewPost />
                            </div>

                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <TreePlanting />

                            </div>
                            <div className={`${styles.modules} ${"d-flex flex-wrap align-items-start justify-content-between "}`}>
                                <NewPost />
                                <NewPost />
                            </div>
                        </div>
            }
        </div>
    );
}

export default NewsModule;