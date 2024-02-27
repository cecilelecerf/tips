
import { ReactComponent as Medal } from './Icon/Medal.svg';
import { ReactComponent as Star } from './Icon/Star.svg';
import "./ResultItem.css"
function ResultItem({title, icon, price}){
    return(
        <div className="ResultItem bg-light rounded-4 shadow p-3 d-flex flex-column justify-content-between">
            <p className="fs-6 align-bottom"><span className='me-1'>{icon==="medal"? <Medal /> : <Star />}</span>{title}</p>
            <p className="text-primary fw-bold fs-2 text-end">{price}</p>
        </div>
    )
}

export default ResultItem