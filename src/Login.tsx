import React from 'react'

const Login: React.FC<{text: string; onLogin: () =>{}}> = ({ text, onLogin }) => {
    return (
        <button onClick={onLogin}>{text}</button>
    )
}
export default Login;