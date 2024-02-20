import "./list-group.css"
const List = (props)=>{
    return <>
          <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
        <div >
          <h6 class="mb-1 heading">{props.heading}</h6>
          
        </div>
       
      </a>
    </>
}

export default List;

