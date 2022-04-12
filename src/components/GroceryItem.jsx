// reusable card component
const GroceryItem = (data) => {
  console.log(data);
  return <>
    {data.map((data)=>(
        <div className="item_Div" key={data.id}>
        <img src={data.imgURL} />
        <h5>{data.title}</h5>
        <div className="price_Div">
              <p>{data.sellingPrice}</p>
              <p>{data.mrp}</p>
        </div>
              
        <button>Add To Cart</button>
      </div>
    ))}
     
 
  </>;
};
export default GroceryItem;
