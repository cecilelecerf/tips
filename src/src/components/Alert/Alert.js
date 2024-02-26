
import { ReactComponent as CheckIcon } from './CheckIcon.svg';
function Alert ({text, checkIcon}){
    return(       
        <div className="fixed-top p-3">
            <p className="alert text-center bg-body text-success border border-3 border-top-0 border-end-0 border-start-0 border-success">
            {text}
            {checkIcon && (<CheckIcon />)}
            </p>
        </div>
    )
}
export default Alert