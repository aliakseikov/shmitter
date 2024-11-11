import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";


function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });

    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });

    const changeAvatar = url => {
        setUser({...user, avatar: url || user.avatar});
    }
    const changeName = name => {
        setUser(prevState => ({...user, name: name || prevState.name}));
    }
    const addFollowers =() => {
setStats({...stats, followers: stats.followers+1});
    }
    const addFollowing =() => {
        setStats({...stats, following: stats.following+1});
    }
    const subFollowers = (e) =>{
        e.preventDefault();
         if (stats.followers >0)
            setStats({...stats, followers: stats.followers-1});
        else stats.followers = 0
    }
    const subFollowing = (e) =>{
        e.preventDefault();
        if (stats.following >0)
            setStats({...stats, following: stats.following-1});
        else stats.following = 0
    }


    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, changeAvatar,changeName,addFollowers,addFollowing,subFollowers,subFollowing
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    )
}

export default App
