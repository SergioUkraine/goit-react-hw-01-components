import styled from '@emotion/styled';
import { animations, shadows, borderStyle, colors } from '../variables';

const color = colors.profile;

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 0;
  padding: 0;
  align-items: center;
  border-radius: ${borderStyle.borderRadius};
  background-color: ${color.background};
  box-shadow: ${shadows.boxShadow};
  transition: ${animations.transition};
  :hover {
    transform: scale(1.05);
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;
  align-items: center;
  border-bottom: 1px solid ${color.descriprionBorder};
`;

export const Avatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: ${color.avatarBackground};
  transition: ${animations.transition};

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
  color: ${color.tag};
  font-size: 14px;
`;

export const Location = styled.p`
  margin: 0;
  padding: 0;
  color: ${color.location};
`;

export const StatsList = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${color.statsListBackground};
  border-radius: 0 0 8px 8px;

  > li {
    padding: 15px 0;
    width: calc(100% / 3);
    text-align: center;
  }

  > li:not(:last-child) {
    border-right: 1px solid ${color.decriptionBorder};
  }
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
  color: ${color.label};
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
`;
