import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
`;

export const Sidebar = styled.div`
  background: #ffffff;
  width: 300px;
  height: 100%;
  box-shadow: 3px 3px 0px;
  justify-content: center;
  padding: 20px;

  h1 {
    font-size: 16px;
    color: #444444;
    margin-bottom: 20px;
  }

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 10px 0;

    h2 {
      margin-left: 5px;
      font-weight: normal;
      color: #333333;
      font-size: 16px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: auto;
`;
