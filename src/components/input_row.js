import './input.scss';
import Input from './inputs'

const InputRow = ({status, row}) => {
    return (
        <div key={Math.random()} className="input-row-container">
            <Input status={status[0]} key={0} i={0} value={row[0] || ""} />
            <Input status={status[1]} key={1} i={1} value={row[1] || ""} />
            <Input status={status[2]} key={2} i={2} value={row[2] || ""} />
            <Input status={status[3]} key={3} i={3} value={row[3] || ""} />
            <Input status={status[4]} key={4} i={4} value={row[4] || ""} />
        </div>)
}

export default InputRow;