import styled from "styled-components";

export const HeroSectionContainer = styled.div`
  background: ${(props) => props.theme.colors.skyBlue};
  /* padding: 0 20rem; */
  display: flex;
  /* align-items: center; */
  justify-content: center;
  height: 500px;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const HeroLeft = styled.div`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  max-width: 624px;
  flex-direction: column;
  margin: 10px;
  position: relative;

  h2 {
    font-size: 2rem;
  }
`;

export const HeroRight = styled.div`
  /* background: green; */
  display: flex;
  align-items: center;
  @media (max-width: 800px) {
    display: none;
  }
`;

////////////// Product Card /////////////////

export const ProductCardContainer = styled.div`
  background: white;
  width: 270px;
  height: 350px;
  box-shadow: 0 0 10px lightgray;
  /* margin: 2rem; */
  padding: 10px;
  transition: all 1s;
  cursor: pointer;
  :hover {
    transform: scale(1.07);
  }
`;

export const ProductCardImage = styled.div`
  background: ${(props) => props.theme.colors.pantonePurple};
  height: 75%;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const ProductCardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5% 0;
  p {
    margin: 0;
  }
  .product_name {
    font-weight: 600;
  }
  .previous_price {
    text-decoration: line-through;
    font-size: 0.85rem;
    color: ${(props) => props.theme.colors.red};
  }
  .current_price {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.green};
  }
`;

////////////// Trending Section ///////////////

export const TrendingSectionContainer = styled.div`
  padding: 80px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.navyBlue};
  /* background-color: #e5e5e5; */
  h3 {
    font-size: 1.7rem;
    margin-bottom: 3rem;
  }
`;

export const TrendingProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  grid-template-columns: repeat(4, 270px);

  /* grid-auto-columns: 270px; */
  /* grid-auto-columns: minmax(350px, auto); */
  grid-auto-flow: row;
  grid-auto-columns: 300px 100px;
  margin-bottom: 40px;
`;

////////////// AD section ///////////////

export const AdSectionContainer = styled.div`
  background: ${(props) => props.theme.colors.skyBlue};
  padding: 10rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

////////////// Blog Section ///////////////

export const BlogSectionContainer = styled.div`
  padding: 100px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  h3 {
    font-size: 1.7rem;
    /* margin-bottom: 3rem; */
  }
`;

export const Blogs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
// /////////////// Single blog ////////////////
export const BlogCardContainer = styled.div`
  background: white;
  width: 270px;
  height: 350px;
  box-shadow: 0 0 10px lightgray;
  /* margin: 2rem; */
  padding: 10px;
  margin: 10px 20px;
  cursor: pointer;
  transition: all 1s;
  :hover{
    transform: scale(1.07);
  }
`;

export const BlogCardImage = styled.div`
  background: ${(props) => props.theme.colors.pantonePurple};
  height: 55%;
  img {
    height: 100%;
    width: 100%;
  }
`;

export const BlogCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  p{
    margin: 0;
  }
  .date {
    font-size: 0.7rem;
    margin: 5px 0;
    font-weight: 600;
    display: flex;
    align-items: center;
    span{
        margin: 0 8px;
    }
  }
  .blog_title{
    margin: 3px 0;
    color: ${props => props.theme.colors.pink};
    font-weight: 600;
    font-size: 1.1rem;
  }
  .blog_intro{
      font-size: 0.92rem;
      margin: 6px 0;
    }
    .read_more{
        text-decoration: underline;
        color: ${props => props.theme.colors.pink};
  }
`;
