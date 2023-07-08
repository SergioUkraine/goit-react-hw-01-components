import styled from '@emotion/styled';
import { animations, shadows, colors } from '../../variables';

const color = colors.friendListItem;

export const ListItem = styled.li`
  display: flex;
  width: 250px;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${color.background};
  border-radius: 8px;
  transition: ${animations.transition};
  box-shadow: ${shadows.boxShadow};

  :last-child {
    margin-bottom: 0;
  }

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
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
  background-color: ${color.avatarBackground};
  border-radius: 4px;
`;

export const Name = styled.p`
  font-weight: 700;
`;
