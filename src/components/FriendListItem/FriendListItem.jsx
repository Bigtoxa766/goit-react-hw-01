
import css from './FriendListItem.module.css'

function FriendListItem({ avatar, name, isOnline }) {

  return (
    <div className={css.item}>
      <img className="avatar" src={ avatar} alt="Avatar" width="48" />
      <p className="name">{ name}</p>
      <p className={isOnline ? css.online : css.offline}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  )
}

export default FriendListItem;