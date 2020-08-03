import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  align-items: center;
  border-radius: 4px;
  margin: 80px 8px;
  h1{
    font-size: 50px;
    margin-top: 15px;
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  img{
    max-width: 150px;
  }
`;

export const ChocolateList = styled.ul`
  border-top: 1px solid #eee;
  list-style: none;
  margin-top: 20px;
  li{
    margin-top: 10px;
    border-top: 1px solid #eee;
  }
`;