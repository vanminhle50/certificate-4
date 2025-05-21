# Movie List Manager - Web-Based UI

A web-based application to manage movies using **HTML**, **CSS**, and **JavaScript**. This UI allows you to **add**, **view**, **search**, and **sort** movies.

## Features

The web interface is divided into **four main sections**:

---

## 1 Add Movie Section

**Functionality:**  
Users can add a new movie by providing the following information:

- **Movie ID**: A unique, non-empty string identifier.
- **Title**: The movie’s title (must not be empty).
- **Year**: The release year (must be between 1895 and the current year).
- **Rating**: A decimal number representing the rating (scale from 0.1 to 10.0).
- **Submit Button**: Adds the movie to the movie list and displays it in the table.

---

## 2 Display Movie List Section

**Functionality:**  
Displays all the movies stored in the JavaScript array in a table format.

- **Table View**: Shows all movie details: ID, Title, Year, Rating.
- **Refresh Button**: Updates the list to reflect the latest state of the movie array.

---

## 3 Search Movie Section

**Functionality:**  
Allows users to search for a movie by **ID** or **Title**.

- **Search Input**: Enter a Movie ID or Title.
- **Search by ID Button**: Finds the movie with the matching ID.
- **Search by Title Button**: Finds the movie with the matching Title.
- **Result View**:
  - Shows the matched movie details.
  - Displays the number of results found.
  - Shows “0 result” message if no match is found.

---

## 4 Sort Movie Section

**Functionality:**  
Allows sorting the movie list in various ways:

- **Sort A-Z Button**: Sort by title (ascending order).
- **Sort Z-A Button**: Sort by title (descending order).
- **Best Movies Button**: Sort by rating (highest to lowest).

**Bonus Sorting Features:**

- **Sort A-Z by ID Button**: Sort by ID (ascending order).
- **Sort Z-A by ID Button**: Sort by ID (descending order).

---

## Technologies Used

- **HTML5**  
- **CSS3**  
- **JavaScript (Vanilla)**

---

## Project Structure

/project-root
│
├── index.html               # Main HTML file
├── README.md                # Project documentation
│
├── css/
│   └── style.css            # Styling for the UI
│
├── js/
│   ├── movie-list-class.js  # JavaScript functions to manage movies
│   └── script.js            # JavaScript for interactivity with UI App
│
└── img/                     # Folder to store images

---

## 🚀 Getting Started

1. Clone the repository or download the project.
2. Open `index.html` in any modern web browser.
3. Start adding, viewing, searching, and sorting your movie list!

---

## 📌 Notes

- Ensure all fields are filled before submitting a movie.
- The Movie ID must be unique for each movie.
- The rating accepts decimal values like 7.5 or 8.0.
- Refresh the list to view any recent changes.

---

## 👨‍💻 Author

Developed by Van Minh Le — feel free to improve or extend this project!

---

## 📄 License

This project is open-source and free to use. Feel free to modify, share, and contribute!
