import "./featuredInfo.css";

import {GetFeatureData} from "../../utils/utils";
import {useEffect, useState} from "react";

export default function FeaturedInfo() {
    const [totalCamp, setTotalCamp] = useState([]);
    const [totalEmail, setTotalEmail] = useState([]);
    const [activeCamp, setActiveCamp] = useState([]);

    useEffect(() => {
        let mounted = true;
        GetFeatureData()
            .then(response => {
                if (mounted) {
                    setTotalCamp(response.totalCampaign);
                    setTotalEmail(response.totalEmailSent)
                    setActiveCamp(response.runningCampaign)
                }
            })
        return () => mounted = false;
    }, [])

    return (
        <div>
            <h2>Current Month Details..</h2><br/>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Total Campaign Run</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{totalCamp}</span>
                    </div>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Total Email Sent</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{totalEmail}</span>
                    </div>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Active Campaign</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">{activeCamp}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
