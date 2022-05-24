import styled from 'styled-components'

const media = {
  desktop: '@media(min-width: 520px)',
  phone:'@media(max-width: 328px)',
}

export const ContentWrap = styled.div`
  width: 100%;
  border: 1px solid green;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left:14px;
    align-self: flex-start;
  }

  .boxWrap{
    
    width: 100%;
    height: 100vh;
    ${media.desktop}{
      display: flex;
      flex-flow: row nowrap;
      align-items:center;
      justify-content: space-between;  
    }
    .img{
      width:100%;
      height: 50%;
      background-color: gray;
      margin: 0 0 10px 0;
     
      ${media.desktop}{
        width: 48%;
        margin: 0 0 0 0px;
      }
      .hamburger{
        display: block; 
        width: 100%;
        height: 100%;
        object-fit: cover;  
      }
    }
    .cont{
      width:90%;
      margin: 0 auto;
      height: 150px;
      background-color: gray;
      ${media.desktop}{
        width: 48%;
        margin: 0 0 0 10px;
      }
    }
  }

`