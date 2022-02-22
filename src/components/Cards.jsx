export default function Cards(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.title} className="location-img"/>
            <div className="card-container">
                <div className="card-info">
                    <img src="/src/assets/location-icon.svg" alt="" className="location-icon"/>
                    <h3>{props.location.toUpperCase()}</h3>
                    <span className="link"><a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
                </div>
                <h2 className="location-card-title">{props.title}</h2>
                <span className="start-end-date">{props.startDate} - {props.endDate}</span>
                <p className="card-description">{props.description}</p>
            </div>
        </div>
    )
}