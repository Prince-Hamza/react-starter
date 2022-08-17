import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Content } from '../../styles/styles'

export default function AppFace() {
  return (
    <Row style={Styles.background} lg={12} xs={12}>

      <Col lg={4} xs={12} >
        <br />
        <p style={Styles.title}> CHAPTERUP </p>
        <p style={Styles.describe} >
          Safe and Supportive Mental Wellbeing Group Support Video Calls on topics such as Separation, Divorce, Relationships & Grief.
        </p>
        <br />
        <p style={Styles.describe2}>
          ChapterUp provides you emotional support during tough times and get you ready for the next Chapter of your life. We connect you through vidoe with others going through similar life challenges and connect with the best mental wellness professionals.
        </p>

          <br />

        <Row lg={12} xs={12} style={Content.rowCentrify} >
          <button style={Styles.Button}>
            BOOK FREE DISCUSSION
          </button>
        </Row>

      </Col>


      <Col lg={4} xs={11} >
        <iframe title="yt" width="100%" height="335px"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
        </iframe>
        <br />
        <p style={{ ...Styles.describe2 }}>
          ” I had major life changes that impacted my mental wellbeing. I was struggling to cope and needed the emotional support ChapterUp provided to get me through and plan my future. “
        </p>
      </Col>
      <br />
      <br />
      <br />
    </Row>
  )
}


const Styles = ({
  background: {
    height: '1250px',
    backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
    backgroundSize: 'cover',
    marginLeft: '0px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '0px',
  },
  title: {
    color: 'white',
    font: 'bold italic 2rem times new roman',
  },
  describe: {
    font: 'bold italic 1.5rem times new roman',
    color: 'white',
    lineHeight: '60px'
  },
  describe2: {
    font: '20px times new roman',
    color: 'white',
    lineHeight: '45px'
  },
  Button: {
    border: 'none',
    outline: 'none',
    backgroundColor: '#8D51FF',
    color: 'white',
    width: '250px',
    height: '40px',
    borderRadius: '50px'
  }
})

