import person from '../Assets/Images/person.png'
import earth from '../Assets/Images/earth.png'
import sun from '../Assets/Images/sun.png'
import heart from '../Assets/Images/heart.png'
import hand from '../Assets/Images/hand.png'
import flower from '../Assets/Images/flower.png'
import together from '../Assets/Images/together.png'
import openBook from '../Assets/Images/openBook.png'
import styles from '../Assets/Styles/ValuesGrid.module.scss';
import Value from './Value'

function ValuesGrid() {
    return (
        <div className={styles.container}>
            <div className={`${styles.values} ${"d-flex align-items-center flex-wrap"}`}>
                <Value
                    img={person}
                    header={"Stay open-minded"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis scelerisque lectus."}
                />

                <Value
                    img={earth}
                    header={"Protect the Earth"}
                    description={"Aliquam ullamcorper feugiat urna ut bibendum. Nulla eu erat sed ipsum eleifend."}
                />

                <Value
                    img={sun}
                    header={"Stay optimistic"}
                    description={"Ut turpis ex, elementum ac sapien ac, commodo molestie lectus. Fusce et tempus nisi."}
                />

                <Value
                    img={heart}
                    header={"Work from love"}
                    description={"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."}
                />

                <Value
                    img={hand}
                    header={"Lend a hand"}
                    description={"Curabitur faucibus, libero vel posuere pharetra, dolor erat pharetra purus, ut accumsan."}
                />

                <Value
                    img={flower}
                    header={"Plant new seeds"}
                    description={"Donec a maximus ligula. Mauris consequat sapien lectus, eu aliquam sem cursus."}
                />

                <Value
                    img={together}
                    header={"Work together"}
                    description={"Morbi eu fermentum dui. Nunc sit amet erat ut urna facilisis"}
                    span={"iaculis. Vivamus efficitur."}

                />

                <Value
                    className={styles.lastValue}
                    img={openBook}
                    header={"Be an open book"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam "}
                    span={"mi felis, auctor vitae vestibulum vel"}
                />
            </div>
        </div>
    );
}

export default ValuesGrid;