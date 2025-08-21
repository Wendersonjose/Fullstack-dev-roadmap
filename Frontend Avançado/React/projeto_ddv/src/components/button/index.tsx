import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './style.css'


type ButtonProps = {
    children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({children, ...rest}: ButtonProps) => {   
    
    return <button {...rest } className="submit-button">{children}</button>
        
    }


