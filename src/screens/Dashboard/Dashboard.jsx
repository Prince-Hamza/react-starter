import React from 'react'

import Table from '../Table/Table'
import { Col , Row} from 'react-bootstrap'
import Menubar from '../Menubar/Menubar'
import { Content } from '../../styles/styles'

export default function Dashboard() {
    return (
        <Row lg={6} style={{ ...Content.rowLeftStart, ...Styles.dashboard  }}>
            <Menubar />
            <Col lg={10} style={Styles.column2} >
                <Table />
            </Col>
        </Row>
    )
}

const Styles = ({
    column2: {
        ...Content.colTopLeft,
        marginLeft: '15px',
    },
    dashboard: {
        backgroundColor: 'rgb(50,50,50)'
    }
})
