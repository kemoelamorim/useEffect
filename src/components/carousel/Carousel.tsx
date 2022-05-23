import React, { createElement, useEffect, useRef } from 'react'

class SlideCarousel{
  constructor(element: any){
    const slideItems: any = document.createElement('div')
    slideItems.classList.add('slide-items')
    slideItems.innerHTML = 'oi'
    element.appendChild(slideItems)
    
  }
}

const Carousel = () => {
  const elemento : any = useRef(null)
  useEffect(()=>{
    new SlideCarousel(elemento.current)
  })
  return (
    <div ref={elemento} className='slide'>kemoel</div>
  )
}

export default Carousel