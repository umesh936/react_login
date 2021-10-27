import "./settingList.css";
import {useState, useEffect} from "react";
import {GetSettingData} from "../../utils/utils";
import SettingTableItem from "./SettingTableItem";

export default function SettingList() {
    const [data, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        GetSettingData()
            .then(items => {
                if (mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div className="userList">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Property Name</th>
                    <th>Property Value</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <SettingTableItem
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        value={item.value}
                    />
                ))}
                </tbody>

            </table>

        </div>
    );
}
