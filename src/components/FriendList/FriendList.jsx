import FriendListItem from "../FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

function FriendList({friends}) {
  return (
		<ul className="friend-list">
			
			{friends.map(({ avatar, name, isOnline, id }) => {
				return (
					< li key={id}>
						<FriendListItem
							avatar={avatar}
							name={name}
							isOnline={isOnline} />
					</li>
				)	
				})}
				
</ul>
  )
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired
};