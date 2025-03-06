import { Children } from 'react'
import './button.css'

type MyButtonProps = {
    // label?: string //Opcional (?)
    buttonType: 'forward' | 'backward' //Union type
    children: React.ReactNode //Children
}

function pushButton() {
}
function Button() {
    return (
        <>
            <button>
            <svg width="50%" height="50%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </>
    )
}

export default Button;