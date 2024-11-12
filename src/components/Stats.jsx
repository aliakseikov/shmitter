import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Stats = () => {
    const {user, stats,addFollowers, addFollowing,subFollowers,subFollowing} = useContext(TwitterContext);
    return (
        <div className={'user-stats'}>
            <div>
                <Avatar/>
               <div>
                   {user.name}
               </div>
            </div>
            <div className={'stats'}>
                <div onClick={addFollowers} onContextMenu={subFollowers}>
                    Followers: {stats.followers}
                </div>
                <div onClick={addFollowing} onContextMenu={subFollowing}>
                    Following: {stats.following}
                </div>
            </div>
        </div>
    );
};

export default Stats;