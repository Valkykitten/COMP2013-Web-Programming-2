export default function Card(props){
    const Ratingnum = parseFloat(props.rating);

    const rating = Ratingnum < 4.0 ? "rating low" : "rating high";
    
    return (
       <div className="card-component">
        <img src={props.image} alt="" width="180 px"/>
        <h2>{props.country}</h2>
        <p className="company">{props.company}</p>
        <p className={rating}>{props.rating}</p>
        <p className="price">{props.price}</p>


       </div>
        
    );

}