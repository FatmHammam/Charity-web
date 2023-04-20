import styles from '../Assets/Styles/Value.module.scss'


function Value({ img, header, description, span }) {
    return (
        <div className={`${styles.value} ${"d-flex flex-column"}`}>
            <img src={img} alt="" />
            <p className='text-white'>{header} </p>
            <span className='text-white'>{description} <span>{span}</span></span>
        </div>
    );
}

export default Value;