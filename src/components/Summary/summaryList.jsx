import "./summaryList.css";
import {useState, useEffect} from "react";
import { GetSummaryData} from "../../utils/utils";
import SummaryTableItem from "./SummaryTableItem";

export default function SummaryList() {
    const [data, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        GetSummaryData()
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
                    <th>Subject</th>
                    <th>From Name</th>
                    <th>From Email</th>
                    <th>Counter</th>
                    <th>Started On</th>
                    <th>Finished On</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item) => (
                    <SummaryTableItem
                        key={item.id}
                        id={item.id}
                        campName={item.campName}
                        subject={item.subject}
                        fromName={item.fromName}
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
