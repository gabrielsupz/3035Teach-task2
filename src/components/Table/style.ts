import styled, { css } from 'styled-components'
export const StyledTable = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }
  img {
    width: 100px;
    height: auto;
  }

  tr {
    background: rgb(94, 93, 93);
    background: radial-gradient(
      circle,
      rgba(94, 93, 93, 1) 0%,
      rgba(33, 33, 33, 1) 100%
    );
  }
`
export const SeachBox = styled.div`
  display: flex;
  max-width: 230px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  gap: 8px;
  background: #2f3640;
  border-radius: 50px;
  position: relative;

  .searchButton {
    color: white;
    position: absolute;
    right: 8px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(
      --gradient-2,
      linear-gradient(90deg, #2af598 0%, #009efd 100%)
    );
    border: 0;
    display: inline-block;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  }

  button:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.5) 0 10px 20px;
    transform: translateY(-3px);
  }

  button:active {
    box-shadow: none;
    transform: translateY(0);
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 15px;
    padding: 24px 40px 24px 26px;
    text-align: center;
  }
`
