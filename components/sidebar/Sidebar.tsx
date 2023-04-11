import React, { FC, useState } from "react";
import { allRoutes, getFlatRouteArray } from "../../authentication"
import { pruneRouteArray } from './../../authentication';
import Play from "../playground/Play";

const features = [
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "1.6",
    "2.1",
    "2.2",
    "2.3",
    "2.4",
    "2.5",
    "2.6",
    "3.1",
    "3.2",
    "3.3",
    "3.4",
    "4.1",
    "4.2",
    "4.2.1",
    "4.2.2",
    "4.2.3",
    "4.2.4",
    "5.1",
    "5.1.1",
    "5.1.2",
    "5.1.3",
    "5.2",
    "5.2.1",
    "5.2.2",
    "5.3",
    "5.4",

];


function Entry({ entry }: any): any {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="p-10">
            {entry.nested ? (
                <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? '-' : '+'}{entry.items.featureName}</button>
            ) : (
                <div>{entry.items.featureName}</div>
            )}

            {isOpen && (
                <div>
                    {entry.nested?.map((entry: any, index: any) => (
                        <Entry entry={entry} key={index} />
                    ))}
                </div>
            )

            }
        </div>
    )

}

const Sidebar = () => {
    const allFeature = pruneRouteArray(features)
    console.log("allRoute", allRoutes)
    //allFeature = getFlatRouteArray(allFeature)
    console.log("allFeature", allFeature)
    return (
        <>
            <div>
                {allFeature.map((entry: any, index: any) => (

                    entry && <Entry entry={entry} key={index} />
                )
                )}
            </div>

        </>
    )
};

export default Sidebar;

