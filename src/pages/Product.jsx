import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding:"10px",flexDirection:"column"})}
`
const ImgCont = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:"40vh"})}
`
const InfoCont = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`
const FilterCont = styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`
const Filter = styled.div`
  display: flex;align-items: center;
`
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props=> props.color};
  margin: 0 5px;
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left:10px;
  padding: 5px;
`
const FilterSizeOption = styled.option`
  
`
const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  ${mobile({width:"100%"})}
`
const AmountCont = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = styled.span`
  border: 1px solid teal;
  width: 30px;
  height: 30px;
  border-radius:10%;
  display: flex;
  align-items:center;
  justify-content: center;
  margin: 0 5px;
`
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color:white;
  cursor: pointer;
  font-weight:500;

  &:hover{
    background-color: #e2dddd;
  }
`
const Remove = styled.div`
  
`
const Add = styled.div`
  
`
const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgCont>
            <Image src="https://static.zara.net/photos///2022/I/0/1/p/6688/206/406/2/w/1920/6688206406_1_1_1.jpg?ts=1659095659551"/>
        </ImgCont>
        <InfoCont>
            <Title>Denin Jumpsuit</Title>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque libero, tenetur molestiae ea ducimus
                 recusandae in! Distinctio fugiat officiis molestiae quos rem
                  eius similique culpa, delectus asperiores nobis, eaque doloremque!
            </Desc>
            <Price>$20</Price>
            <FilterCont>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterCont>
            <AddContainer>
              <AmountCont>
                <Remove><i className="fa fa-x"></i></Remove>
                <Amount>1</Amount>
                <Add><i className="fa fa-plus"></i></Add>
              </AmountCont>
              <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoCont>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product;
