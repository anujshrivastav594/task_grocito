import "./item-card.css";

const Card = (props)=>{
    return <>
          <div class="col-lg-2 col-md-6 mb-12">

        <div class="product-card">
          <img class="card-img-top" src={props.img} alt="Product Image"/>

          <div class="card-body">
            <h4 class="card-title">{props.name}</h4>
            <h5>{props.price}</h5>
            <p class="card-text">{props.desc}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
          </div>

        </div>

      </div>
    </>
}

export default Card;

