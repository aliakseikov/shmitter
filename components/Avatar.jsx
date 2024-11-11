import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";

const Avatar = ({size}) => {
    const {user, changeAvatar} = useContext(TwitterContext);

    return (
        <img
            onClick={() => {
                const url = prompt('Enter new avatar url');
                changeAvatar(url);
            }}
            className={`user-avatar ${size ?? ''}`}
            src={user.avatar} alt={user.name}
        />
    );
};

export default Avatar;