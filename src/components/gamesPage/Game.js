import { useParams } from "react-router";
export default function Game(){
    let { game } = useParams();
    return(
        <div>{game}</div>
    )
}