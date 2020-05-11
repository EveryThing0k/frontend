import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  box-shadow: 1px 0 0 #dddddd;
  padding: 0 30px;
  border-bottom: 1px solid #eeee;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    a:first-child {
      color: #444;
      font-size: 24px;
      padding-right: 20px;
      border-right: 1px solid #eee;
      margin-right: 20px;
    }

    img {
      height: 26px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      margin: 0 10px;
      font-size: 15px;
      font-weight: bold;
      color: ${props => (props.selected ? '#444444' : '#999999')};
    }
  }

  aside {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: #999;
      font-size: 14px;

      strong {
        color: #444;
        font-size: 16px;
      }
    }
    a {
      img {
        height: 54px;
        width: 54px;
      }
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: 2px;
  img {
    height: 54px;
    width: 54px;
  }
`;
