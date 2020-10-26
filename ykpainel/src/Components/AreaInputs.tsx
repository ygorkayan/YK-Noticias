import styled from "styled-components";

interface Props {
  height: number;
}

export default styled.div`
  display: flex;
  height: ${(props: Props) => props.height}%;
  flex-direction: column;
  justify-content: center;
`;
