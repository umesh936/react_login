import "./logout.css";
import {useState, useEffect} from "react";
import {logoutProfile} from "../../utils/utils";

export default function Logout() {
    const [msg, setMsg] = useState();

    useEffect(() => {
        // logoutProfile()
        //     .then(items => {
        //         setMsg("You have been logout Successfully")
        //     })
    }, [])

    return (
        <div className="userList">
            <h2>{msg}</h2>
        </div>
    );
}
