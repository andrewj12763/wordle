import Button from './components/button'
import './App.css';

const Keyboard = ({goodLetters, badLetters, handleButton}) => {
    const lettersRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const lettersRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const lettersRow3 = ["Delete","Z", "X", "C", "V", "B", "N", "M", "Enter"]
    return (
        <div className="keyboard-container">
            <div key={0} className="keyboard-row">
                {lettersRow1.map((key, i) => {
                    return (
                        <Button key={i} 
                                active = {goodLetters.filter((l) => l === key).length > 0}
                                inactive = {badLetters.filter((l) => l === key).length > 0}
                                handleButton={handleButton} 
                                letter={key} />
                    )
                })}
            </div>
            <div key={1} className="keyboard-row">
            {lettersRow2.map((key, i) => {
                return (
                        <Button key={i}
                            active = {goodLetters.filter((l) => l === key).length > 0}
                            inactive = {badLetters.filter((l) => l === key).length > 0}
                            handleButton={handleButton} 
                            letter={key} />
                )
            })}
            </div>
            <div key={2} className="keyboard-row">
                {lettersRow3.map((key, i) => {
                    return (
                            <Button key={i} 
                                active = {goodLetters.filter((l) => l === key).length > 0}
                                inactive = {badLetters.filter((l) => l === key).length > 0}
                                handleButton={handleButton} 
                                letter={key} />
                    )
                })}
            </div>
        </div>)
}

export default Keyboard;