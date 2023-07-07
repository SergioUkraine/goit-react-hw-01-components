import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  width: 250px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: cubic-bezier(0.47, 0, 0.745, 0.715) 250ms;

  :hover {
    transform: scale(1.05);
  }
`;

export const Description = styled.div`
  width: 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e4e9f0;
`;

export const Avatar = styled.img`
  display: block;
  margin-bottom: 30px;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e4e9f0;
  transition: cubic-bezier(0.47, 0, 0.745, 0.715) 250ms;

  :hover {
    transform: scale(1.5);
    border-radius: 10px;
  }
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  font-weight: 700;
  font-family: 14px;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  padding: 0;
  color: #94a0ac;
  font-size: 14px;
`;

export const Location = styled.p`
  margin: 0;
  padding: 0;
  color: #94a0ac;
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #f3f6f9;
  border-radius: 0 0 8px 8px;

  > li {
    padding: 15px 0;
    width: calc(100% / 3);
    text-align: center;
  }

  > li:not(:last-child) {
    border-right: 1px solid #e4e9f0;
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
  color: #94a0ac;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
`;
