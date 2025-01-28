import React, { useState } from "react";
import "./EditUserForm.css";

function EditUserForm({ user, onSubmit, onCancel }) {
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditUserForm;
