import InputRow from './components/input_row'
import './App.css';

const Table = ({lettersTable, currentRow, lettersTableStatus}) => {
    return (
        <div className="table-container">
            {Object.keys(lettersTable).map((row, i) => 
             <InputRow key={i} 
                       row={lettersTable[i]}
                       active={i === currentRow ? true : false}
                       status={lettersTableStatus[i]} />
            )}
        </div>)
}

export default Table;