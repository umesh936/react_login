import "./activeList.css";
import {useState, useEffect} from "react";
import TableItem from "./TableItem";
import {GetActiveData} from "../../utils/utils";

export default function ActiveList() {
    const [data, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        GetActiveData()
            .then(items => {
                if(mounted) {
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
                    <th>Camp Name</th>
                    <th>From Email</th>
                    <th>Counter</th>
                    <th>Started On</th>
                    <th>Finished On</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <TableItem
                        key={item.id}
                        id={item.id}
                        campName={item.campName}
                        fromEmail={item.fromEmail}
                        totalCounter={item.totalCounter}
                        startedOn={item.startedOn}
                        finishedOn={item.finishedOn}
                        status={item.status}
                    />
                ))}
                </tbody>

            </table>

        </div>
    );
}
