import { useParams } from "react-router";

export default function Unit(){
    let {number} = useParams();
    return (
    <div>Unit {number}</div>
    );
 
}