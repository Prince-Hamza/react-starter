import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap'

export default function AppFace() {
  return (
    <Row style={Styles.background} lg={12} xs={12}>

      <Col lg={4} xs={12} >
        <p style={Styles.title}> CHAPTERUP </p>
        <p style={Styles.describe} >
          Safe and Supportive Mental Wellbeing Group Support Video Calls on topics such as Separation, Divorce, Relationships & Grief.
        </p>
        <br />
        <p style={Styles.describe2}>
          ChapterUp provides you emotional support during tough times and get you ready for the next Chapter of your life. We connect you through vidoe with others going through similar life challenges and connect with the best mental wellness professionals.
        </p>
        <button style={Styles.Button}>
          BOOK  FREE DISCUSSION
        </button>

      </Col>


      <Col lg={4} >
        <iframe title="yt" width="500px" height="335px"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
        </iframe>
        <br />
        <p style={{ ...Styles.describe2, width: '510px' }}>
          ” I had major life changes that impacted my mental wellbeing. I was struggling to cope and needed the emotional support ChapterUp provided to get me through and plan my future. “
        </p>
        <br />

      </Col>

    </Row>
  )
}


const Styles = ({
  background: {
    border: 'dashed 1px',
    height: '1250px',
    width: '100%',
    backgroundImage: `url(https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/129325364/original/afaddcb9d7dfaaf5bff7ef04101935814665ac16/design-an-attractive-background-for-your-website.png)`,
    backgroundSize: 'cover',
    marginLeft: '0px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    padding: '50px'
  },
  title: {
    color: 'white',
    font: 'bold italic 24px times new roman',
  },
  describe: {
    font: 'bold italic 28px times new roman',
    color: 'white',
    width: '420px',
    height: '200px',
    lineHeight: '55px'
  },
  describe2: {
    font: '20px times new roman',
    color: 'white',
    width: '420px',
    height: '300px',
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

