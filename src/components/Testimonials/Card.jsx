import './card.css';
const Card = props => {
    console.log(props);
    return (
        <>
                <h1 className="card-quote" key={props.id}>{props.title}</h1>   
                <h3 className="card-author">{props.author}</h3>
                <h3 className="card-org">{props.organization}</h3>
        </>
    )
}

export default Card