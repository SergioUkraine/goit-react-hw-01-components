import styled from '@emotion/styled';
import { borderStyle, shadows, colors } from '../variables';

const color = colors.transactionHistory;

export const TransactionTable = styled.table`
  text-align: center;
  width: 250px;
  box-shadow: ${shadows.boxShadow};
  border-radius: ${borderStyle.borderRadius};
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const TableHead = styled.thead`
  color: ${color.headerText};
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  border-color: transparent;
  border-style: solid;
  height: 50px;
  background-color: ${color.headerBackground};
  text-transform: uppercase;

  :first-of-type {
    border-top-left-radius: ${borderStyle.borderRadius};
  }
  :last-child {
    border-top-right-radius: ${borderStyle.borderRadius};
  }
`;

export const TableBodyRow = styled.tr`
  background-color: ${color.firstColor};

  :nth-of-type(even) {
    background-color: ${color.secondColor};
  }

  :last-child > td:first-of-type {
    border-bottom-left-radius: ${borderStyle.borderRadius};
  }
  :last-child > td:last-child {
    border-bottom-right-radius: ${borderStyle.borderRadius};
  }
`;

export const TableBodyCell = styled.td`
  border-color: transparent;
  border-style: solid;
  height: 50px;

  :first-of-type {
    text-transform: capitalize;
  }
`;

export const TableBody = styled.tbody`
  color: ${color.bodyText};
`;
