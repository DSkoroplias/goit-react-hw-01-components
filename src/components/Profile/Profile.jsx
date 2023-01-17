import { ProfileList } from '../ProfileList/ProfileList';

import PropTypes from 'prop-types';

export const Profile = ({ items }) => {
  return (
    <>
      {items.map(({ username, tag, location, avatar, stats }) => (
        <ProfileList
          key={tag}
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      ))}
    </>
  );
};

Profile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
