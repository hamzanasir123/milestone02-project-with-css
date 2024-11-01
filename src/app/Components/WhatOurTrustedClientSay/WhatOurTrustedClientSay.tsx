import React from 'react'
import Styles from "./WhatOurTrustedClientSay.module.css"
import FeedbackCard from '../FeedbackCard/FeedbackCard'

const feedbacks = [
  { id: 1 , Name: 'Delightful Dark', msg: ' Rich, bold flavors with a hint of bitterness, perfect for dark chocolate lovers who crave depth.' },
  { id: 2 , Name: 'Silky Smooth', msg: ' Melts effortlessly with a creamy texture thats pure indulgence in every bite.' },
  { id: 3 , Name: 'Nutty Bliss', msg: 'The crunch of nuts complements the chocolate beautifully, adding a perfect balance of texture and taste' },
  { id: 4 , Name: 'Nutty Bliss', msg: 'The crunch of nuts complements the chocolate beautifully, adding a perfect balance of texture and taste' },
  { id: 5 , Name: 'Nutty Bliss', msg: 'The crunch of nuts complements the chocolate beautifully, adding a perfect balance of texture and taste' },
];

function WhatOurTrustedClientSay() {
  return (
    <>
    <h1 className={Styles.h1}>What Our Trusted Client Say</h1>
    <p className={Styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deserunt, <br/> ratione error est quae fugiat magnam fugit eveniet co</p>
    <div className={Styles.div1}>
    {feedbacks.map((feedback) => (
      <FeedbackCard
      key={feedback.id}
      Name={feedback.Name}
      msg={feedback.msg}
      />
    ))}
    </div>
    </>
  )
}

export default WhatOurTrustedClientSay