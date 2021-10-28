import "./activeList.css";
import {useState, useEffect} from "react";
import {submitGenerateDataRequest} from "../../utils/utils";

export default function SmtpReport() {
    const [msg, setMsg] = useState();
    const [mounted, setMounted] = useState(false);

    function makeCall() {
        console.log("in make call")
        if (mounted) {
            console.log("in make call condition")
            submitGenerateDataRequest()
                .then(response => {
                    if (mounted) {
                        setMsg(response)
                    }
                })
            setMounted(false)
        }
    }

    return (
        <div>
            <label>
                Name:
                <input type="text" name="name"/>
            </label>
            <br/>
            <input type="button" value="Generate" onClick={makeCall()}/>

        </div>
    );
}
