import './App.css'
import FriendList from './components/FriendList'
import Profile from './components/Profile'
import userData from "./components/userData.json"

function App() {
 

  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats} />
      
      <FriendList/>
    </>
  )
}

export default App
