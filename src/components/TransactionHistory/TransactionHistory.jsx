import PropTypes from 'prop-types';
import {
  TransactionTable,
  TableHead,
  TableBody,
  TableHeadRow,
  TableHeadCell,
  TableBodyRow,
  TableBodyCell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableHeadRow>
      </TableHead>

      <TableBody>
        {items.map(item => (
          <TableBodyRow key={item.id}>
            <TableBodyCell>{item.type}</TableBodyCell>
            <TableBodyCell>{item.amount}</TableBodyCell>
            <TableBodyCell>{item.currency}</TableBodyCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
