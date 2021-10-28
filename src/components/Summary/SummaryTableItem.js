const SummaryTableItem = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.campName}</td>
            <td>{props.subject}</td>
            <td>{props.fromName}</td>
            <td>{props.fromEmail}</td>
            <td>{props.totalCounter}</td>
            <td>{new Date(props.startedOn).toLocaleString()}</td>
            <td>{new Date(props.finishedOn).toLocaleString()}</td>
            <td>{props.status}</td>
        </tr>
    );
};

export default SummaryTableItem;