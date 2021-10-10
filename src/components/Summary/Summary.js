import {getStoreSummary} from "../../utils/localStore";

function Summary() {
    const data  = getStoreSummary()
    return (
        <h2>Summary</h2>
    )
}

export default Summary;