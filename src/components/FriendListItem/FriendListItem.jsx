import PropTypes from 'prop-types';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className="item">
      <img className="avatar" src={ avatar} alt="Avatar" width="48" />
      <p className="name">{ name}</p>
      <p className="status">{ isOnline ? 'online' : 'offline'}</p>
    </div>
  )
}

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}