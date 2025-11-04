import React from 'react'
import AnimatedReveal from './AnimatedReveal'

const WhatIsOkox = () => {
  return (
    <div className='section-two'>
      <AnimatedReveal direction="up">
        <h1 className="section-title">
          WHAT IS $OKOX?
          <br />
          <span>From Meme to Movement</span>
        </h1>
      </AnimatedReveal>

      {/* <h1 className='section-title'>WHAT IS $OKOX?<br/><span>From Meme to Movement</span></h1> */}
      <AnimatedReveal direction="left">

      <div className='section-two-content' delay={0.5}>
        <ul>
          <li>On April 1, 2023, the official OKX account introduced a mascot during april fools.</li>
          <li> It was supposed to be a one-day laugh.</li>
          <li> But the internet had other plans.</li>
          <li>The community fell in love.</li>
          <li> Memes were born. Mentions kept coming.</li>
          <li> And now, that same mascot lives onchain as a token powered by its community.</li>
        </ul>
      </div>
      </AnimatedReveal>

      <div className='section-two-bottom-content desktop'>$OKOX isn’t just a coin. It’s a reminder that crypto culture builds itself — one meme at a time.</div>
    </div>
  )
}

export default WhatIsOkox