import './Button.css'

const Button = (props) => {
    const { value, onClick } = props;

    return (
        <button>{value}</button>
    )
}

export default Button;