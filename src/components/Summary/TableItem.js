const TableItem = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.status}</td>
        </tr>
    );
};

export default TableItem;