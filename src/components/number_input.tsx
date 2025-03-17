import './number_input.css'

const Number_input = ({value, setValue}) => {
    
    return (
        <>
            <input type="number" min="1" /*max={Array.length}*/ onChange={(event) =>
                setValue(Number(event.target.value) - 2)
            }></input>
        </>
    )
}
export default Number_input ;