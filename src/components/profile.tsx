import styles from '../styles/components/Profile.module.css';


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucastrindadebarra.png" alt="Lucas Barra" />
            <div>
                <strong>Lucas Barra</strong>

                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}