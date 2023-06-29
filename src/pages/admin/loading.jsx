import "./styleAdmin.css";

function Loading() {
    return (
        <div className="mt-5 center" >
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div> <span> Loading... Please wait.</span>
        </div>
    )
}

export default Loading;