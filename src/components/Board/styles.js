import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  padding: 30px 0;
  height: calc(100% - 80px);
`;

export const AddList = styled.div`
  padding-left: 20px;
`;

export const AddListInput = styled.button`
  height: 40px;
  min-width: 300px;
  border: 1px dashed #999999;
  display: flex;
  align-items: center;
  background: #f5f5f5;
  svg {
    margin: 0 5px;
  }

  input {
    flex: 1;
    border: 0;
    background: #f5f5f5f5;
    color: #333333;

    ::placeholder {
      color: #999999;
      font-size: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  display: flex;
  height: 30px;
  background: #33333333;
  font-size: 14px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
