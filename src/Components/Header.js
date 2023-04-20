import styles from '../Assets/Styles/Header.module.scss'
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const goToDonationForm = () => {
        navigate("/donation1");
    }

    const goHome = () => {
        navigate("/");
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.title}>
                    <div onClick={goHome}>
                        <p>The Green</p>
                        <p >Belt Movement</p>
                    </div>
                    <div className={styles.links}>
                        <a href="/aboutUs" >About us</a>
                        <a href="/stories" >Our stories</a>
                        <a href="/news" >Latest news</a>
                    </div>
                </div>
                <button onClick={goToDonationForm}>Donate Today</button>
            </div>
        </div>
    );
}

export default Header;