const SettingTableItem = (props) => {

    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.value}</td>
        </tr>
    );
};

export default SettingTableItem;