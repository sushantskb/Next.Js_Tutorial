import "./not-found.css";
const NotFound = () => {
  return (
    <body>
      <div class="container">
        <div class="emoji">🔒😢🔑</div>
        <h1>404</h1>
        <p>Oops! Page not found.</p>
        <p>
          Looks like you stumbled upon a secured area. Please{" "}
          <a href="/login">log in</a> to access the content.
        </p>
      </div>
    </body>
  );
};

export default NotFound;
