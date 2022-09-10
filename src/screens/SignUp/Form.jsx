import React, { useState } from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'
import { Content } from '../../styles/styles'
import { FormContext } from './FormContext'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default function InfoForm() {

    const [formData, setFormData] = useState({
        percentage: 12, step: 1, step1_data: {},
        step2_data: {
            q: 'What brings you to seek support?', selected: ''
        },
        step3_data: {
            q: 'Over the past week, how often have you not being able to stop worrying something terrible would happen?',
            selected: ''
        },
        step4_data: {
            q: 'Over the past week, how often have you not been able to get a good nights sleep?'
        },
        step5_data: {
            q: 'Over the past week, how often have you not done the things you used to enjoy? ',
            selected: ''
        },
        step6_data: {
            q: 'Over the past week, how often have you been down or depressed or hopeless',
            selected: ''
        },
        step7_data: {
            q: 'Over the past week, how often have you had trouble concentrating or lacking energy?',
            selected: ''
        },
        step8_data: {
            q: 'Over the past week, how often have you had trouble concentrating or lacking energy?',
            selected: ''
        },
        step9_data: {
            q: 'What support model would you like to consider?',
            selected: ''
        }
    })

    return (
        <FormContext.Provider value={{ formData: formData, setFormData: setFormData }}>
            <br />
            <Col lg={12} style={Content.colCentrify}>
                <Col lg={5} style={Styles.form}>
                    <div style={Styles.percentWrap} >
                        <div style={{ ...Styles.filling, width: formData.percentage + '%' }} >
                            {`${formData.percentage}%`}
                        </div>
                    </div>

                    {formData.step === 1 && <Step1 />}
                    {formData.step === 2 && <Step2 />}
                    {formData.step === 3 && <Step3 />}

                </Col>
            </Col>
        </FormContext.Provider>

    )
}





const Styles = ({
    form: {
        backgroundColor: 'whitesmoke',
        padding: '35px',
        marginBottom: '15px',
        ...Content.colCentrify

    },
    percentWrap: {
        height: '25px',
        width: '100%',
        marginBottom: '20px',
        backgroundColor: 'white'
    },
    filling: {
        height: '25px',
        backgroundColor: '#8D51FF',
        color: 'white',
        ...Content.rowCentrify
    }
})