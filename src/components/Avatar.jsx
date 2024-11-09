import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user} = useContext(TwitterContext)
    return (
        <img className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name} />
    );
};

export default Avatar;