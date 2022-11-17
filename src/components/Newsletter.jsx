import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
height: 60vh;
background-color: #faf3f3;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom:20px;
`
const Desc = styled.div`
font-size: 24;
font-weight: 300;
margin-bottom:20px;
${mobile({textAlign:"center"})}
`
const InputCont = styled.div`
width: 50%;
height: 40px;
background-color: #fff;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({width:"80%"})}
`
const Input = styled.input`
border: none;
flex: 8;
padding-left:20px;
`
const Button = styled.button`
flex:1;
border:none;
background-color:teal;
color: white;
`
const Send = styled.div`
    
`

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputCont>
         <Input placeholder="Your email"/>
         <Button>
            <Send>
                <i className="fa fa-paper-plane"></i>
            </Send>
         </Button>
      </InputCont>
    </Container>
  )
}

export default Newsletter
