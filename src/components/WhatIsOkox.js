"use client";

import React from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedReveal from './AnimatedReveal'

const WhatIsOkox = () => {
  const { t } = useTranslation();
  return (
    <div className='section-two'>
      <AnimatedReveal direction="up">
        <h1 className="section-title">
          {t('whatIsOkox.title')}
          <br />
          <span>{t('whatIsOkox.subtitle')}</span>
        </h1>
      </AnimatedReveal>

      {/* <h1 className='section-title'>WHAT IS $OKOX?<br/><span>From Meme to Movement</span></h1> */}
      <AnimatedReveal direction="left">

      <div className='section-two-content' delay={0.5}>
        <p>{t('whatIsOkox.description')}</p>
        <ul>
          {t('whatIsOkox.points', { returnObjects: true }).map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      </AnimatedReveal>

      <div className='section-two-bottom-content desktop'>{t('whatIsOkox.bottomLine')}</div>
    </div>
  )
}

export default WhatIsOkox