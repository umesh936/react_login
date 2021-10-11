import "./summaryList.css";
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";
import TableItem from "./TableItem";
import {GetMonthlyData} from "../../utils/utils";

export default function SummaryList() {
    const [data, setData] = useState(GetMonthlyData());

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    console.log("-------")
    console.log(data)
    console.log("-------")

    if(data === undefined) {
        return (
            <div>
                <h4>No Data Available</h4>
            </div>
        )
    }
    return (
        <div className="userList">
            <table id="customers">
                <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                {data.map((item) => (

                    <TableItem
                        id={item.id}
                        username={item.username}
                        email={item.email}
                        status={item.status}
                    />
                ))}
            </table>

        </div>
    );
}
