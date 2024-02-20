import List from "../list-group/list-group";
const Types = ()=>{
    return <>
       <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style={{width: "380px" + 'em'}} >
    <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
      <span style={{textAlign:"center"}} class="fs-5 fw-semibold">Grocito List groups</span>
    </a>
    <div class="list-group list-group-flush border-bottom scrollarea">
    
       <List heading="Item Rice"/>
       <List heading="Item Atta"/>
       <List heading="Item Daal"/>
       <List heading="Item Drinks"/>
       <List heading="Item Sugar"/>
       <List heading="Item Rice"/>
       <List heading="Item Atta"/>
       <List heading="Item Daal"/>
       <List heading="Item Drinks"/>
       <List heading="Item Sugar"/>
       <List heading="Item Daal"/>
       <List heading="Item Drinks"/>
     
       
       

    </div>
  </div>
    </>
}

export default Types;

