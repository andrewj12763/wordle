import './button.scss';

const Button = ({active, inactive, handleButton, letter, i}) => {
    return (
        <div key={i} className="button-container">
            <button key={i} 
                    className={active ? "activeLetter" : inactive ? "inactive" : ""}
                    onClick={() => handleButton(letter)}>
                {letter}
            </button>
        </div>)
}

export default Button;