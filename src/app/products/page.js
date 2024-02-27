/* eslint-disable react/jsx-key */
const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    console.log("Products response:", data);
    return data.result;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { success: false };
  }
};

export default async function Page() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      <h1>Product List</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Name
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Price
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Color
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Company
            </th>
            <th
              style={{
                borderBottom: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                backgroundColor: "#f2f2f2",
              }}
            >
              Category
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.color}</td>
              <td>{item.company}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
