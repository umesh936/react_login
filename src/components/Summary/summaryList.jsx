import "./summaryList.css";
import {DataGrid} from "@material-ui/data-grid";
import {DeleteOutline} from "@material-ui/icons";
import {userRows} from "../../dummyData";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function SummaryList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };
    console.log("-------")
    console.log(data)
    console.log("-------")
    const columns = [
        {field: "id", headerName: "ID", width: 90},
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt=""/>
                        {params.row.username}
                    </div>
                );
            },
        },
        {field: "email", headerName: "Email", width: 200},
        {
            field: "status",
            headerName: "Status",
            width: 120,
        },
        {
            field: "transaction",
            headerName: "Transaction Volume",
            width: 160,
        },
    ];

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                options={{
                    pageSize: 8,
                    pageSizeOptions: [5, 10, 20],
                }}
                checkboxSelection
            />
        </div>
    );
}
