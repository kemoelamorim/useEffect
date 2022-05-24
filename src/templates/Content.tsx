import React from 'react'
import { ContentWrap } from './ContentStyle'

const Content = () => {
  return (
    <ContentWrap>
      <h3>Some Heating</h3>
      <div className="boxWrap">
        <div className="img">
          <img className='hamburger' src="https://github.com/kemoelamorim/imagens-projeto/blob/main/hamburger-1.png?raw=true" alt="hamburger" />
        </div>
        <div className="cont"></div>
      </div>
    </ContentWrap>
  )
}

export default Content