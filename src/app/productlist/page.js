async function fetchData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ProductList = async ()=> {
  let product = await fetchData();
  console.log(product);
  return (
    <>
      <h1>Product List</h1>
      {
        product.map((item)=> (
          <div key={item._id}>
            <h3>Name : {item.title}</h3>
            <h3>Price : ${item.price}</h3>
            <hr />
          </div>
        ))
      }
    </>
  )
}

export default ProductList;