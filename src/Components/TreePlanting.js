import tree from '../Assets/Images/tree.png'
import styles from '../Assets/Styles/TreePlanting.module.scss';


function TreePlanting() {
    return (
        <div className={`${styles.container} ${"d-flex flex-column align-items-center justify-content-center "}`}>
            <div className={`${styles.treePlanting} ${"d-flex flex-column align-items-start justify-content-between position-relative "}`}>
                <p className='text-white position-relative'>Tree planting initiative in <span>Green Fields Park</span></p>
                <a className='text-white position-relative' href="#" >Find out more about this event</a>
                <button className='border-0 position-relative'>EVENT</button>
            </div>
            <img className='w-100' src={tree} alt="" />
        </div>
    );
}

export default TreePlanting;