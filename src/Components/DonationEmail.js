import styles from '../Assets/Styles/DonationEmail.module.scss';

function DonationEmail() {
    return (
        <div className={`${styles.container} ${"w-100 d-flex align-items-center justify-content-center"}`}>
                        <div className={`${styles.donation} ${"d-flex align-items-center justify-content-between"}`}>
                <p className='text-white'>Thank you so much for giving. We’ve sent a receipt for your donation to <a href="#">yourmail@emailaddress.com.</a> If you have any questions, please don’t hesitate to reach out to <a href='#'>support@emailaddress.com.</a></p>
                <span className='text-white'>We can Take action now to save the future.</span>
                </div>
        </div>
    );
}

export default DonationEmail;