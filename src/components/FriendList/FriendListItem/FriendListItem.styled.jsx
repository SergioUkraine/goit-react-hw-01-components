import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 8px;
  transition: cubic-bezier(0.47, 0, 0.745, 0.715) 250ms;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    transform: scale(1.05);
  }
`;

export const Status = styled.span`
  display: block;
  margin: 0;
  margin-right: 20px;
  padding: 0;

  ::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    ${props =>
      props.status
        ? 'background-color: #6ba960;'
        : 'background-color: #f05c5a;'}
  }
`;

export const Avatar = styled.img`
  margin-right: 70px;
  background-color: #e4e9f0;
  border-radius: 4px;
`;

export const Name = styled.p`
  font-weight: 700;
`;
