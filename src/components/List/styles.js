import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;
  opacity: ${props => (props.done ? 0.6 : 1)};

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: 500;
      font-size: 16px;
      padding: 0 10px;
    }

    svg {
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const AddTask = styled.div`
  min-height: 40px;
  border: 1px dashed #999999;
  display: flex;
  align-items: center;
  svg {
    margin: 0 5px;
  }

  input {
    width: 100%;
    height: 40px;
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
