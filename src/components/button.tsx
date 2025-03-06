import { Children } from 'react'
import './button.css'

type MyButtonProps = {
    // label?: string //Opcional (?)
    buttonType: 'forward' | 'backward' //Union type
    children: React.ReactNode //Children
}
function Button() {
    return (
        <>
            <button>
                Button
            </button>
        </>
    )
}

export default Button;