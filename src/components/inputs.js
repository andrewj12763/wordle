import './input.scss';

const Input = ({value, status}) => {
    return (
        <div className="input-container">
            <input key={Math.random()} 
                   disabled={true} 
                   maxLength="1" 
                   value={value}
                   className={status === 0 ? "inactive" :
                              status === 1 ? "active" :
                              status === 2 ? "wrong" :
                              status === 3 ? "correct" : ""} />
        </div>)
}

export default Input;