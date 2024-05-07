import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { formatCurrency } from '../utilities/formatCurrency';
import Menu from '../components/Menu';
import { mobile } from '../utilities/responsive';
import { useLocation } from 'react-router-dom';

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  ${mobile({ textAlign: 'center' })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexFlow: 'column', justifyContent: 'center' })}
`;
const Filter = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({ margin: '10px' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #898c8d;
`;

const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  color: #898c8d;
`;

const Option = styled.option``;

const ProductList = () => {
  window.scrollTo(0, 0);
  const location = useLocation();
  const cate = location.pathname.split('/')[2];

  const [filter, setFilter] = useState('default');
  const [sort, setSort] = useState('');

  return (
    <Container>
      <Navbar />
      <Menu />
      <Title>Latest Products</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Sort By:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="default">Default</Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price low to high</Option>
            <Option value="desc">Price high to low</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Filter:</FilterText>
          <Select
            defaultValue="default"
            onChange={(e) => setFilter(e.target.value)}
          >
            <Option value="default">Default</Option>
            <Option value="100000-200000">
              {formatCurrency(100000)}-{formatCurrency(200000)}
            </Option>
            <Option value="200000-300000">
              {formatCurrency(200000)}-{formatCurrency(300000)}
            </Option>
            <Option value="300000-400000">
              {formatCurrency(300000)}-{formatCurrency(400000)}
            </Option>
            <Option value="400000-500000">
              {formatCurrency(400000)}-{formatCurrency(500000)}
            </Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cate={cate} filter={filter.split('-')} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
