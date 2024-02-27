import NavDate from "../NavDate/NavDate"
import "./Graph.css"
import { ReactComponent as GraphSVG } from './GraphSvg.svg';
function Graph(){
    return(
        <div className="my-4">
            <div className="d-flex justify-content-between mb-3">
                <p className="text-primary fs-4 fw-bold">Progression</p>
                <NavDate Date="day"/>
            </div>
            <div className="GraphSVG">
                <GraphSVG />
            </div>
        </div>
    )
}
export default Graph