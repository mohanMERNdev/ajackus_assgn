# ajackus_assgn
Overview
   This project is a React.js-based web application designed for user management. It allows users to view, add, edit, and delete user details.The app interacts with the JSONPlaceholder API, which simulates backend functionality.

Features:-
View Users:
  Displays a list of users with their details.
  Initially loads 10 users and fetches more on scroll.

Add User:
  Opens a popup form to add a new user.
  Data is added to the local state for display.

Edit User:
  Opens a popup form pre-filled with user details for editing.
  Updated details are reflected in the local state.
  
Delete User:
  Deletes a user from the list, with changes reflected in the local state.

Fetching Data:
  The app fetches user data from the JSONPlaceholder API.

Local State:
  User data is managed locally in the application state.
  Additions, edits, and deletions are reflected immediately in the user list.

Popup Forms:-
  Separate popup forms are used for adding and editing users.
  Forms are displayed conditionally when relevant buttons are clicked.

How It Works:-
  Add: Click the "Add User" button to open the form and input new user details.
  Edit: Click the "Edit" button next to a user to modify their details.
  Delete: Click the "Delete" button to remove a user from the list.
  Infinite Scrolling: As you scroll down, additional users are fetched and displayed automatically.
  Customizations
  
This app can be easily customized to use a real backend API for full CRUD functionality. Additionally, styling, validation rules, and user details can be tailored to suit specific requirements.
