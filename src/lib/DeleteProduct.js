"use client";
export default function DeleteProduct(props) {
  console.log(props.id);
  const deleteRecord = async () => {
    let response = await fetch(
      "http://localhost:3000/api/products/" + props.id,
      {
        method: "delete",
      }
    );
    response = await response.json();
    if (response.success) {
      alert("Product Deleted");
    } else {
        alert("Error");
    }
  };
  return <button onClick={deleteRecord}>Delete</button>;
}
