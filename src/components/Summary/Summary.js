import {getStoreSummary} from "../../utils/localStore";

function Summary() {
    let data = getStoreSummary()
    return (
        data.forEach(
            <h2>{data.id}</h2>
        )

    )
}

export default Summary;