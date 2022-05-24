import React, { createElement, useEffect, useRef } from 'react'

class SlideCarousel{
  constructor(element: any){
    this.createSlideItems(element)
    
  }
  createSlideItems(nodeDom: any){
    const slideItems = this.criaElemento('div');
    slideItems.classList.add('slide-items')
    nodeDom.appendChild(slideItems)
  }
  criaElemento(typeTag: string){
    return document.createElement(typeTag)
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