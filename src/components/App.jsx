import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';
import css from './App.module.css';

const title = 'Some title';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.profile}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div className={css.statistics}>
        <Statistics stats={data} title={title} />
      </div>
      <div className={css.statistics}>
        <Statistics stats={data} />
      </div>
    </div>
  );
};
