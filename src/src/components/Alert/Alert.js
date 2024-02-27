import { ReactComponent as CheckIcon } from './CheckIcon.svg';
import './Alert.css';

const Alert = ({ text, checkIcon, darkMode }) => {
    const alertClass = darkMode ? 'alert-light' : 'alert-dark';

    return (
        <div className={`alert ${alertClass}`}>
            <span>{text}</span>
            {checkIcon && <CheckIcon className="check-icon" />}
        </div>
    );
};

export default Alert;