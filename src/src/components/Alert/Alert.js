import { ReactComponent as CheckIcon } from './CheckIcon.svg';

const Alert = ({ text, checkIcon, darkMode }) => {
    const alertClass = darkMode ? 'alert-dark' : 'alert-light';

    return (
        <div className={`alert ${alertClass}`}>
            <span>{text}</span>
            {checkIcon && <CheckIcon className="check-icon" />}
        </div>
    );
};

export default Alert;