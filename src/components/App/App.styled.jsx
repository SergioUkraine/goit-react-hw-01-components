import styled from '@emotion/styled';

export const Containter = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 400px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    max-width: 1100px;
  }
`;

export const ContainerProfile = styled.div`
  margin-bottom: 20px;
`;

export const ContainerStatistics = styled.div`
  margin-bottom: 20px;
  > section:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContainerFriendlist = styled.div``;
