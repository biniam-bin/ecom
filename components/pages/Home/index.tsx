import type { NextPage } from "next";
import { SimpleButton } from "../../Common";
import { Layout } from "../../Layout";
import {
  AdSectionContainer,
  BlogCardContainer,
  BlogCardImage,
  BlogCardInfo,
  Blogs,
  BlogSectionContainer,
  HeroLeft,
  HeroRight,
  HeroSectionContainer,
  ProductCardContainer,
  ProductCardImage,
  ProductCardInfo,
  TrendingProductsContainer,
  TrendingSectionContainer,
} from "./style";

import {GoCalendar} from "react-icons/go"

const HeroSection: NextPage = () => {
  return (
    <HeroSectionContainer>
      <HeroLeft>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut .</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
          eligendi dolorem, nisi ipsa tempore totam aut sapiente cum. Eaque
          necessitatibus inventore, doloribus excepturi modi sequi id nostrum
          laboriosam sint tenetur deleniti voluptatum odio corrupti delectus.
        </p>
        <SimpleButton bg="#fb2e86" fg="white">
          Shop Now
        </SimpleButton>
      </HeroLeft>
      <HeroRight>
        <img src="https://picsum.photos/400/400" alt="" />
      </HeroRight>
    </HeroSectionContainer>
  );
};

const ProductCard: NextPage = () => {
  return (
    <ProductCardContainer>
      <ProductCardImage>
        <img src="/product.png" alt="" />
      </ProductCardImage>
      <ProductCardInfo>
        <p className="product_name">Cantilever chair</p>

        <p className="previous_price">250 ETB</p>
        <p className="current_price">200 ETB</p>
      </ProductCardInfo>
    </ProductCardContainer>
  );
};

const TrendingSection: NextPage = () => {
  return (
    <TrendingSectionContainer>
      <h3>Trending Products</h3>
      <TrendingProductsContainer>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </TrendingProductsContainer>
      <SimpleButton bg="#fb2e86" fg="white">
        All products
      </SimpleButton>
    </TrendingSectionContainer>
  );
};

const AdSection: NextPage = () => {
  return (
    <AdSectionContainer>
      <h2>Make money just by promoting our products</h2>
      <SimpleButton bg="#fb2e86" fg="white">
        Get started
      </SimpleButton>
    </AdSectionContainer>
  );
};

const BlogCard: NextPage = () => {
    return (
      <BlogCardContainer>
        <BlogCardImage>
          <img src="/blog.png" alt="" />
        </BlogCardImage>
        <BlogCardInfo>
          <p className="date">
            <GoCalendar /> <span>20 November 2021</span>
          </p>
          <p className="blog_title">Top essential trends for 2022</p>
          <p className="blog_intro">
            More off this less hello samlande lied much over tightly circa horse
            taped mightly
                </p>
                <p className="read_more">Read More</p>
        </BlogCardInfo>
      </BlogCardContainer>
    );
}
const BlogSection: NextPage = () => {
  return (
      <BlogSectionContainer>
          <h3>Latest Blog</h3>
          <Blogs>
              <BlogCard/>
              <BlogCard/>
              <BlogCard/>
          </Blogs>
    </BlogSectionContainer>
  );
};
const HomePage: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <TrendingSection />
      <AdSection />
      <BlogSection />
    </Layout>
  );
};

export default HomePage;
