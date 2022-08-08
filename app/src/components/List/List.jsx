import companyIcon from '../../assets/icons/building.png'
import './List.styles.scss'

function List({ companiesData }) {

    return(
        <div className='list-wrapper'>
            {companiesData?.map((el) => {
                return (
                    <div key={el.id} className="list-container">
                        <div className="table-cell">
                            <img src={companyIcon} alt="companyIcon" height="25px" />
                        </div>
                        <div className="table-cell">{el.companyName}</div>
                        <div className="table-cell">{el.industry}</div>
                        <div className="table-cell">{el.activeProjects}</div>
                        <div className="table-cell-last">View Profile</div>
                    </div>)
            })}
        </div>

)}

export default List;