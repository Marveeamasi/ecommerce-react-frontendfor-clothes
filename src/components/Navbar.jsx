import styled from 'styled-components';
import {mobile} from "../responsive";


const Container = styled.div`
    height:60px;     
    position: sticky;
    top: 0;
    background-color: #ffffffe8;
    z-index: 11;
    ${mobile({height:"50px"})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const SearchIcon = styled.div`
    font-size:16px;
    color: gray;
`
const Input = styled.input`
    border: none;
    ${mobile({width:"50px"})}
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    font-family: 'Square Peg';
    ${mobile({fontSize:"24px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent:"center"})}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px", marginLeft:"10px"})}
`
const CartIcon = styled.div`
    position: relative;
    font-size:20px;
`
const Count = styled.div`
    padding: 2px 5px;
    background-color: tomato;
    position: absolute;
    border-radius: 50%;
    display: flex;
    font-size:10px;
    justify-content: center;
    align-items: center;
    top: 0;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    <SearchIcon><i className="fa fa-search" ></i></SearchIcon>
                </SearchContainer>
            </Left>
            <Center><Logo>mVart</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                   <CartIcon>
                   <Count>4</Count>
                    <i className="fa fa-cart-shopping"></i>
                    </CartIcon>                 
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
