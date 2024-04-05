import './Button.css'


const Button = ({ type, text }) => {
    return (
        <div>
            <button className={`Button Button_${type}`}>{text}</button>
        </div>
    )
}

export default Button;