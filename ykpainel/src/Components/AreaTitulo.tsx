import styled from "styled-components";

type Props = {
  height: number;
};

export default styled.div`
  display: flex;
  height: ${(props: Props) => props.height}%;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 2rem;
`;
