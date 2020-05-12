import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
`;

export const Content = styled.div`
  margin-top: 10px;

  button {
    cursor: pointer;
    display: flex;
    margin: 20px 0;
    align-items: center;
    border: none;
    background: transparent;

    strong {
      color: #444444;
      font-weight: normal;
      margin-left: 5px;
      font-size: 16px;
    }
  }

  button:last-child {
    margin-top: 25px;
    margin-bottom: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  h4 {
    font-size: 16px;
  }
  h5 {
    color: #999999;
    font-weight: 500;
    font-size: 14px;
  }

  img {
    height: 45px;
    width: 45px;
    margin-left: 4px;
  }
`;
