import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`
const Logo = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialCont = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=> props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#eee"})}
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;

`
const LocationIcon = styled.div`
    margin-right:10px;
`
const PhoneIcon = styled.div`
     margin-right:10px;
`
const MailIcon = styled.div`
     margin-right:10px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
`
const Title = styled.h3`
    margin-bottom:20px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap:wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>mVart</Logo>
        <Desc>There are many variations of passages of LOre Isum available, 
            but the majority hve suffered alteration in some form, by injectionhmur,
             or ransom words while it doesnt look even slightly believable
        </Desc>
        <SocialCont>
            <SocialIcon color="385999">
                <i className="fa-brands fa-facebook"></i>
            </SocialIcon>
            <SocialIcon color="e4405f">
                <i className="fa-brands fa-instagram"></i>
            </SocialIcon>
            <SocialIcon color="55acee">
                <i className="fa-brands fa-twitter"></i>
            </SocialIcon>
            <SocialIcon color="e60023">
                <i className="fa-brands fa-pinterest"></i>
            </SocialIcon>
        </SocialCont>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Men's Fashion</ListItem>
            <ListItem>Women's Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            

        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <LocationIcon>
                <i className="fa fa-location-dot"></i>
            </LocationIcon>
           998 timber street Igrita, Portharcourt
        </ContactItem>
        <ContactItem>
            <PhoneIcon>
                <i className="fa fa-phone"></i>
            </PhoneIcon>
            +234 8164 404 989
        </ContactItem>
        <ContactItem>
            <MailIcon>
                <i className="fa fa-envelope"></i>
            </MailIcon>
            contact@ http://github/Marveeamasi.io
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer;
