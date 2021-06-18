import styled from "styled-components";

export const Wraper = styled.div`
  background: var(--darkGrey);
  padding: 0 15px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWhidth);
  padding: 15px 0;
  margin: 0 auto;
`;

export const MDBLogoImage = styled.img`
  width: 80px;

  @media screen and(max-width: 500px) {
    width: 5px;
  }
`;

export const TMDLogoImage = styled.img`
  width: 80px;
  @media screen and(max-width: 500px) {
    width: 50px;
  }
`;
