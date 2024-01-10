import './App.css'
import FriendList from './components/FriendList/FriendList'
import Profile from './components/Profile/Profile'
import userData from "./components/data/userData.json"
import friends from './components/data/friends.json'


function App() {
 

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList friends={friends} />
    </>
  )
}

export default App