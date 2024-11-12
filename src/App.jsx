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
        setUser({...user, name: name || user.name});
    }
    const addFollowers =() => {
setStats({...stats, followers: stats.followers+1});
    }
    const addFollowing =() => {
        setStats({...stats, following: stats.following+1});
    }
    const subFollowers = (e) =>{
        e.preventDefault();
            setStats({...stats, followers: stats.followers>0 ? stats.followers-1 : stats.followers=0});
    }
    const subFollowing = (e) =>{
        e.preventDefault();
        setStats({...stats, following: stats.following>0 ? stats.following-1 : stats.following=0});
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
