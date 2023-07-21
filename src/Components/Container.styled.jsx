import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr; 
  max-width: 1200px;
  margin: 50px auto;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%; /* Adjust the width as needed */
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;
`;

export const SmallContainer = styled.div`
  margin-top: 2px;
  padding: 15px;
  display: flex; 
  justify-content: center;
  align-items: flex-start;
`;

export const SizeTitle = styled.div`
  font-weight: bold;
`;

export const Description = styled.div`
  position: relative;
  text-align: center;
  padding: 0px 20px;
  height: 45px;
`;

export const Price = styled.div`
  font-size: 1.5em;
  margin-left: 5px;
  font-weight: bold;
`;

export const Button = styled.div`
  text-align: center;
  background-color: rgb(27, 26, 32);
  color: rgb(255, 255, 255);
  padding: 15px 20px;
  margin-top: 10px;
  margin-bottom: 50px;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
  width: 240px;
  height: 20px;
`;
export const Circle = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
  width: 35px;
  height: 35px;
  font-size: 0.8em;
  margin-bottom: 8px;
  margin-right: 8px;
  border-radius: 50%;
  line-height: 35px;
  text-align: center;
  background-color: ${(props) => (props.isSelected ? '#007bff' : '#ccc')};
  color: ${(props) => (props.isSelected ? '#fff' : '#333')};
`;
