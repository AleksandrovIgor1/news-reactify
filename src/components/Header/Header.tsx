import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/hooks/formatDate";
import styles from "./styles.module.css";
import { useTheme } from "../../context/ThemeContext";

const { isDark, toggleTheme } = useTheme()

const Header = () => {
  return (
    <header className={`${styles.header} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.info}>
        <h1 className={styles.title}>Good morning</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <img src={isDark ? themeIcons.dark : themeIcons.light} width={30} alt="theme" onClick={toggleTheme} />

    </header>
  );
};
export default Header;
