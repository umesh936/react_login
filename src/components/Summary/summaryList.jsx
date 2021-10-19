import "./summaryList.css";
import {useState, useEffect} from "react";
import TableItem from "./TableItem";
import {GetMonthlyData} from "../../utils/utils";

export default function SummaryList() {
    const [data, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        GetMonthlyData()
            .then(items => {
                if(mounted) {
                    setList(items)
                }
            })
        return () => mounted = false;
    }, [])



    // console.log("-------")
    // console.log(data?.then(res=> console.log(res)))
    // console.log("-------")
    return (
        <div className="userList">
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (

                    <TableItem
                        id={item.id}
                        username={item.username}
                        email={item.email}
                        status={item.status}
                    />
                ))}
                </tbody>


            </table>

        </div>
    );
}
