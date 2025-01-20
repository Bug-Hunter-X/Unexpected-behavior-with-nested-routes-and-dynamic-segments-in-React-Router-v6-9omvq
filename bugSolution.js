```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<UsersList/>}/>
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}

function UsersList() {
  return <div>Users List</div>;
}

function User() {
  const { id } = useParams();
  // Add error handling or validation for id
  if (!id || isNaN(parseInt(id))) {
    return <div>Invalid User ID</div>;
  }
  return <div>User {id}</div>;
}
```