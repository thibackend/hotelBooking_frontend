import "./styleAdmin.css";

function Loading() {
    return (
        <div className="container mt-5 center" >
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> <span className="text-loading"> Loading... Please wait.</span>
        </div>
    )
}

export default Loading;