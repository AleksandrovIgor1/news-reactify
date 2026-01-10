import { useTheme } from '../../context/ThemeContext';
import type { IPaginationProps } from '../../interfaces';
import styles from './styles.module.css'


const Pagination = ({ totalPages, handleNextPage, handlePreviousPage, handlePageClick, currentPage }: IPaginationProps) => {
    const { isDark } = useTheme();
    return (
        <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
            <button className={styles.arrow} onClick={handlePreviousPage} disabled={currentPage <= 1} >{'<'}</button>
            <div className={styles.list}>
                {[...Array(totalPages)].map((_, i) => {
                    return <button className={styles.pageNumber} onClick={() => handlePageClick(i + 1)} key={i} disabled={currentPage === i + 1}>{i + 1}</button>
                })}
            </div>
            <button className={styles.arrow} onClick={handleNextPage} disabled={currentPage >= totalPages}>{'>'}</button>
        </div>
    )
}
export default Pagination