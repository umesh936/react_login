import "./featuredInfo.css";

import {GetFeatureData} from "../../utils/utils";
import {storeUser} from "../../utils/localStore";

export default function FeaturedInfo() {
    const data = loadData()
    console.log(" data : " + JSON.stringify(data))

    function loadData() {
        try {
            const response = GetFeatureData();
            if (response !== undefined) {
                console.log(" response : " + JSON.stringify(response))
                console.log(" response.data : " + JSON.stringify(response.data))
                return response.data
            }
        } catch (err) {
            console.log(err.message);
        }
    }

        return (
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Total Campaign Sent</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">5</span>
                    </div>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Total Email Sent</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">102</span>
                    </div>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Active Campaign</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">1</span>
                    </div>
                </div>
            </div>
        );
    }
