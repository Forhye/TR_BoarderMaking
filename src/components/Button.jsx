import './Button.css'


const Button = ({ type, text, onClick }) => {
    return (
        <div>
            <button className={`Button Button_${type}`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;