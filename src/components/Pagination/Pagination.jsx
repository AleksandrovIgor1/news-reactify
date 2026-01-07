
const Pagination = ({totalPages}) => {
    return (
        <div>
            <button>{'<'}</button>
            <div>
                {[...Array(totalPages)].map((_, i) => {
                    return <button key={i}>{i + 1}</button>
                })}
            </div>
            <button>{'>'}</button>
        </div>
    )
}
export default Pagination