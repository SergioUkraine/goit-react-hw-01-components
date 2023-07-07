import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import css from './App.module.css';

const title = 'Some title';

export const App = () => {
  return (
    <div className={css.container}>
      <div className={css['container-profile']}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={css['container-statistics']}>
        <Statistics stats={data} title={title} />
        <Statistics stats={data} />
      </div>
      <div className={css['container-friendlist']}>
        <FriendList friends={friends} />
      </div>
    </div>
  );
};
