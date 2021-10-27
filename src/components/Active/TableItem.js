const TableItem = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.campName}</td>
            <td>{props.fromEmail}</td>
            <td>{props.totalCounter}</td>
            <td>{props.startedOn}</td>
            <td>{props.finishedOn}</td>
            <td>{props.status}</td>
        </tr>
    );
};

export default TableItem;