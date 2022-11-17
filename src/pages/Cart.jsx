import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import { mobile } from "../responsive"

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 300;
    text-align:center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type ==="filled" && "none"};
    background-color: ${props=> props.type ==="filled" ? "black" : "transparent"};
    color: ${props=> props.type ==="filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({display:"none"})}
`
const TopText = styled.span`
    text-decoration:underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection:"column"})}
`
const ProductDetail = styled.div`
    flex: 2;
display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
`
const ProductSize = styled.span`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const ProductAmountCont = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin:"5px"})}
`
const Remove = styled.div`
  
`
const Add = styled.div`
  
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom:"20px"})}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 3px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=> props.type === "total" && "500"};
    font-size: ${props=> props.type === "total" && "24px"};
`
const SummaryItemText = styled.span`
    
`
const SummaryItemPrice = styled.span`
    
`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
    border: none;
`
const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/knittedloungewear-arket-1639489966.jpg?crop=1xw:1xh;center,top&resize=480:*"/>
                        <Details>
                            <ProductName><b>Product:</b> JESSIE THUNDER WEAR</ProductName>
                            <ProductId><b>ID:</b> 98877665554</ProductId>
                            <ProductColor color="black"/>
                            <ProductSize><b>Size:</b> 37.5</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountCont>
                        <Remove><i className="fa fa-x"></i></Remove>
                        <ProductAmount>2</ProductAmount>
                        <Add><i className="fa fa-plus"></i></Add>
                        </ProductAmountCont>
                        <ProductPrice>$30</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/Q/M/171789_1653231960.jpg"/>
                        <Details>
                            <ProductName><b>Product:</b> NAKURA JACKET</ProductName>
                            <ProductId><b>ID:</b> 9667766576</ProductId>
                            <ProductColor color="gray"/>
                            <ProductSize><b>Size:</b> M</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountCont>
                        <Remove><i className="fa fa-x"></i></Remove>
                        <ProductAmount>4</ProductAmount>
                        <Add><i className="fa fa-plus"></i></Add>
                        </ProductAmountCont>
                        <ProductPrice>$42</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>
                        Subtotal
                    </SummaryItemText>
                    <SummaryItemPrice>
                       $70
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
                        Estimated Shipping
                    </SummaryItemText>
                    <SummaryItemPrice>
                       $5.90
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>
                        Shipping Discount
                    </SummaryItemText>
                    <SummaryItemPrice>
                       -$5.90
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >
                        Total
                    </SummaryItemText>
                    <SummaryItemPrice>
                       $70
                    </SummaryItemPrice>
                </SummaryItem>
                <SummaryButton>CHECKOUT NOW</SummaryButton>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
