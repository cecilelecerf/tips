
import { ReactComponent as ChevronLeft } from './../Icon/ChevronLeft.svg';
import { ReactComponent as ChevronRight } from './../Icon/ChevronRight.svg';
import "./SliderDate.css"
function SliderDate({date}){
    return(
        <div className="SliderDate border border-secondary-subtle rounded rounded-pill d-flex align-items-center justiy-content-between py-1 px-2">
            <ChevronLeft />
            <p className='text-center'>{date}</p>
            <ChevronRight />
        </div>
    )
}

export default SliderDate