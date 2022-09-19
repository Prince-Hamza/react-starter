import React from 'react'
import { Content } from '../styles/styles'

export default function Button({ style, children, onClick }) {
    return (
        <button style={{ ...Styles.Button, ...Content.rowCentrify, ...style }} onClick={() => {
            onClick()
        }}>
            {children}
        </button>
    )
}


const Styles = ({
    Button: {
        border: 'none',
        outline: 'none',
        backgroundColor: '#9151FF',
        color: 'white',
        width: '250px',
        height: '40px',
        borderRadius: '50px'
    }
})