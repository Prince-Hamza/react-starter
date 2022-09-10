import React from 'react'
import { Content } from '../styles/styles'

export default function Center({ children, style }) {
    return (
        <div style={{ ...Styles.Center, ...style }}>
            {children}
        </div>
    )
}

const Styles = ({
    Center: {
        width: '100%',
        textAlign:'center',
        ...Content.rowCentrify
    }
})
