import styled from '@emotion/styled';

export const Containter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    max-width: 700px;
    padding: 20px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 100vw;
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

export const ContainerFriendlist = styled.div`
  margin-bottom: 20px;
`;
