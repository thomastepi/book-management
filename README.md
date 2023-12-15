# Book Management Application

This React application enables users to manage a book inventory by performing various actions like adding, updating, deleting, searching for books, and quitting the application.

## Components

### Home
- **Description:** Serves as the landing page for the application.
- **Functionalities:**
  - Displays a welcome message.
  - Provides a link to start the setup process.

### Setup
- **Description:** Allows setting up the application by defining the maximum number of books for the inventory.
- **Functionalities:**
  - Accepts user input for the maximum number of books.
  - Validates the input for a positive number greater than zero.
  - Redirects to the main menu upon successful setup.

### MainMenu
- **Description:** Main menu component for navigating through various functionalities.
- **Functionalities:**
  - Provides links to different functionalities like adding, updating, deleting, searching books, and quitting the application.
  - Displays the current inventory if available.

### AddBook
- **Description:** Allows users to add new books to the inventory.
- **Functionalities:**
  - Validates user input for title, author, ISBN, and price.
  - Provides a user-friendly interface for inputting book details.
  - Implements authentication to control book addition.

### UpdateBook
- **Description:** Enables users to update book details like title, author, ISBN, and price.
- **Functionalities:**
  - Validates input before updating the book.
  - Allows changing various attributes of a book.

### DeleteBook
- **Description:** Allows users to remove books from the inventory.
- **Functionalities:**
  - Validates the book number before deleting a book.
  - Provides confirmation before deleting a book.

### SearchBook
- **Description:** Allows users to search for books by author or price.
- **Functionalities:**
  - Enables search functionality by author or price range.

### Quit
- **Description:** Enables users to quit the application.
- **Functionalities:**
  - Prompts users for confirmation before quitting.
