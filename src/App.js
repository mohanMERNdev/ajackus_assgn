import React, { useState, useEffect } from "react";
import "./styles.css";
import UserTable from "./components/UserTable/UserTable";
import AddUserForm from "./components/AddUserForm/AddUserForm";
import EditUserForm from "./components/EditUserForm/EditUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [isEditFormVisible, setIsEditFormVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const transformedData = data.map((user) => {
          const bsParts = user.company.bs.split(" ");
          const department = bsParts.pop();
          const [firstName, lastName] = user.name.split(" ");
          return {
            id: user.id,
            firstName: firstName || "N/A",
            lastName: lastName || "N/A",
            email: user.email,
            department: department || "Unknown",
          };
        });
        setUsers(transformedData);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: Date.now() }]);
    setIsAddFormVisible(false);
  };

  const handleEditUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsEditFormVisible(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container">
      <h1>User Management</h1>
      <button onClick={() => setIsAddFormVisible(true)}>Add User</button>
      <UserTable
        users={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setIsEditFormVisible(true);
        }}
        onDelete={handleDeleteUser}
      />
      {isAddFormVisible && (
        <>
          <div className="overlay"></div>
          <AddUserForm
            onSubmit={handleAddUser}
            onCancel={() => setIsAddFormVisible(false)}
          />
        </>
      )}
      {isEditFormVisible && (
        <>
          <div className="overlay"></div>
          <EditUserForm
            user={selectedUser}
            onSubmit={handleEditUser}
            onCancel={() => setIsEditFormVisible(false)}
          />
        </>
      )}
    </div>
  );
}

export default App;
