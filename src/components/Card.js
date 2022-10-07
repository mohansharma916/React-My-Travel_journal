import location from "../assests/img/location_logo.png"

function Card(props){
    return (
        <div className="card">
            <div className="card-img">
                <img src={props.item.imageUrl}/>
            </div>
            <div className="card-details">
                <div className="location-details">
                    <img src={location}/>
                    <p>{props.item.location}</p>
                    <a href={props.item.googleMapsUrl}>View on Google Map</a>
    
                </div>
                
                <div className="details">
                    <h1>{props.title}</h1>
                    <h5>{props.item.startDate} -{props.item.endDate}</h5>
                    <p>{props.item.description}</p>
                    
                </div>

            </div>

        </div>
    )
}
export default Card;