//  components
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

//  data
import user from '../../data/user.json';
import data from '../../data/data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

//  style
import {
  Containter,
  ContainerProfile,
  ContainerStatistics,
  ContainerFriendlist,
} from './App.styled';

//  internal variables and constants
const title = 'Some title';

// app component body
export const App = () => {
  return (
    <Containter>
      <ContainerProfile>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </ContainerProfile>
      <ContainerStatistics>
        <Statistics stats={data} title={title} />
        <Statistics stats={data} />
        <Statistics stats={data} />
      </ContainerStatistics>
      <ContainerFriendlist>
        <FriendList friends={friends} />
      </ContainerFriendlist>
      <TransactionHistory items={transactions} />
    </Containter>
  );
};
