import styled from '@emotion/styled';
import { animations, shadows, colors } from '../variables';

const color = colors.statistics;

export const StatisticsSection = styled.section`
  min-width: 250px;
  box-shadow: ${shadows.boxShadow};
  transition: ${animations.transition};

  :hover {
    transform: scale(1.05);
  }

  @media screen and (min-width: 1200px) {
    min-width: 300px;
  }
`;

export const StatiscticsTitle = styled.h2`
  display: block;
  margin: 0;
  padding: 20px 0;
  text-align: center;
  text-transform: uppercase;
  background-color: ${color.background};
`;

export const StatisticsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const StatisticsListItem = styled.li`
  width: 100%;
  padding: 10px 0;
  list-style: none;
  text-align: center;
  background-color: ${props => props.color};
`;

export const Label = styled.span`
  display: block;
  color: ${color.label};
  margin-bottom: 5px;
  font-size: 12px;
`;

export const Percentage = styled.span`
  display: block;
  color: ${color.percentage};
  font-size: 18px;
`;
