import{ useRouteError } from "react-router-dom"
const ErrorPage=()=>{
    const err= useRouteError()
    console.log(err)
    return(
        <div>
            <h1>Oops!</h1>
            <div>{err.status +" " + err.statusText}</div>

        </div>
    )
}
export default ErrorPage;