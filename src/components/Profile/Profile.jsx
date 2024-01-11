import css from './profile.module.css'

function Profile(props) {
  const { name, tag, location, image, stats: {followers, views, likes} } = props;
  return (
    <div className={css.profileWrap}>
      <div className="description">
        <img
          src={image}
          alt="User avatar"
          className={css.avatar}
        />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className="label">Followers</span>
          <span className="value">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Views</span>
          <span className="value">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className="label">Likes</span>
          <span className="value">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
