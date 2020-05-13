import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  background: #ffff;
  border: 1px solid #404040;
  border-radius: 35px;
  height: 50px;
  width: 300px;

  input {
    border: 0;
    display: flex;
    margin-left: 5px;
    width: 100%;
    height: 40px;

    font-size: 16px;
    color: #333333;
  }
`;
