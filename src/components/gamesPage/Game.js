import { Fragment } from "react";
import { useParams } from "react-router";
import ChooseLevel from "./ChooseLevel";

export default function Game(){
    let { game } = useParams();
    return(
        <Fragment>
        <div>{game}</div>
        <ChooseLevel/>
        </Fragment>
    )
}