const SummaryTableItem = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.campName}</td>
            <td>{props.subject}</td>
            <td>{props.fromName}</td>
            <td>{props.fromEmail}</td>
            <td>{props.totalCounter}</td>
            <td>{props.startedOn}</td>
            <td>{props.finishedOn}</td>
            <td>{props.status}</td>
        </tr>
    );
};

export default SummaryTableItem;