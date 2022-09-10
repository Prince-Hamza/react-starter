import React from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { TiTick } from 'react-icons/ti'

export default function Selector({ text, onChange }) {

    const [circleColor, setCircleColor] = useState('whitesmoke')
    const [selectorColor, setSelectorColor] = useState('whitesmoke')


    const selectCircle = (text) => {
        setCircleColor(circleColor === 'whitesmoke' ? 'white' : 'whitesmoke')
        setSelectorColor(selectorColor === '#8d51ff' ? 'whitesmoke' : '#8d51ff')
        onChange(text)
    }

    return (
        <Col lg={11} style={{ ...Styles.wrapper, backgroundColor: selectorColor, color: selectorColor === 'whitesmoke' ? '#222' : 'white' }}
            onClick={() => { selectCircle(text) }} >  <div> {text} </div>
            <div style={{ ...Styles.circle, ...Content.colCentrify, backgroundColor: circleColor }} onClick={() => { selectCircle() }}>
                {selectorColor !== 'whitesmoke' && <TiTick style={{ color: '#8d51ff', width: '30px', height: '30px' }} />}
            </div>
        </Col>
    )
}


const Styles = ({
    wrapper: {
        height: '67px',
        marginBottom: '5px',
        borderRadius: '5px',
        padding: '15px',
        border: '1px solid #8d51ff',
        ...Content.rowSpaceBetween,
    },
    circle: {
        width: '43px',
        height: '43px',
        borderRadius: '50px',
        border: 'solid 1px lightgray'
    }
})