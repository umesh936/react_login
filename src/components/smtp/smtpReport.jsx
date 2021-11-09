import "./activeList.css";
import {useState, useEffect} from "react";
import {submitGenerateDataRequest} from "../../utils/utils";

export default function SmtpReport() {
    const [name, setName] = useState();
    const [isDisable, setIsDisable] = useState(false);
    const [nameFromButtonClicked, setNameFromButtonClicked] = useState();
    const [msg, setMsg] = useState('');

    useEffect(() => {
        if (nameFromButtonClicked) {
            submitGenerateDataRequest(nameFromButtonClicked)
                .then(response => {
                    response = response.replace("/home/","")
                    setMsg("File is generated at Path : " + response.substring(response.indexOf("/")+1))
                })
            setIsDisable(false)
        }
    }, [nameFromButtonClicked])

    const handleClick = () => {
        setIsDisable(true)
        setNameFromButtonClicked(name)
    }

    return (
        <div>
            <label>
                Camp Name (Copy from summary tab):
                <input type="text" name="name" value={name} disabled={isDisable}
                       onChange={e => setName(e.target.value)}/>
            </label>
            <br/>
            <input type="button" value="Generate" onClick={() => handleClick()}/><br/> <br/>
            <label style={{color: "red"}}>{msg}</label>
        </div>
    );
}
