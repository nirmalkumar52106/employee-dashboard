import { Link } from "react-router-dom"

function Deleteemploye(){
    return(
        <>
        <table border="2px">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
        </table>
        <Link to="/">Back</Link>
        
        </>
    )
}

export{Deleteemploye}