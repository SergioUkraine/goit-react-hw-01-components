import PropTypes from 'prop-types';
import getRandomColor from 'utils/getRandomColor';
import {
  StatisticsSection,
  StatiscticsTitle,
  StatisticsList,
  StatisticsListItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatiscticsTitle>{title}</StatiscticsTitle>}
      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsListItem key={id} color={getRandomColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatisticsListItem>
        ))}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
