import Price from "./product";
import custom from "./style/custom.module.css";
async function fetchData() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}

const ProductList = async () => {
  let product = await fetchData();
  console.log(product);
  return (
    <>
      <h1 className={custom.h1}>Product List</h1>
      <table className={custom.table}>
        <thead>
          <tr>
            <th className={custom.th}>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item._id}>
              <td className={custom.td}>{item.title}</td>
              <td className={custom.td}><Price price={item.price} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


export default ProductList;