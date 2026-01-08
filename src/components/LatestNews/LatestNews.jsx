import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';
const LatestNews = ({banners, isLoading}) => {
    return (
        <section className={styles.section}>
            <BannersList isLoading={isLoading} banners={banners}/>
        </section>
    )
}
export default LatestNews