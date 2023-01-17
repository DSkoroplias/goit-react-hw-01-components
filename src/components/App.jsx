import { Profile } from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../path/to/user.json';
import data from '../path/to/data.json';
import friends from '../path/to/friends.json';
import transactions from 'path/to/transactions.json';

export const App = () => {
  return (
    <>
      <Profile items={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
};
