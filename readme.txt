Golpokuri is an interactive storytelling platform designed to provide a space for writers to publish stories and for readers to explore a wide variety of content across different categories. The platform caters to children with its colorful, cartoonish design and is built to be user-friendly for both writers and readers.
Features
For Writers:

    Story Creation: Writers can create and post stories in multiple categories.
    Edit/Delete Stories: Writers have the ability to edit or delete stories after posting.
    Story Management: Writers can manage all their stories through a personal dashboard.

For Readers:

    Read Stories: Readers can browse and read stories from various categories.
    Category Filter: Stories are organized by categories, making it easier to find content based on interests.
    Simple and Child-Friendly Interface: The platform has a cartoonish, visually appealing design to attract young readers.
    Comment:And reader also can post a comment in specific Story.

General Features:

    User Authentication: Supports both writer and reader roles, with each role having appropriate access.
    Responsive Design: Fully responsive, ensuring an optimal user experience on both mobile and desktop.
    Story Categories: Stories are organized by categories to help readers explore based on their interests.
    Appealing UI for Children: Designed with a cartoonish and playful theme to engage young audiences.

Technologies Used

    Backend: python,Django,django rest framework
    Frontend: HTML, CSS, Bootstrap, JavaScript (with child-friendly styling and designs)
    Database: SQLite (development), PostgreSQL (production)
    Authentication: Django's built-in authentication system

Project Structure

This repository contains both the frontend and backend code for Golpokuri.
Directory Structure:

    backend/: Contains Django views, models, serializers, and URL routing for backend functionality.
    frontend/: Contains HTML, CSS, JavaScript, and templates for the user interface.
    static/: Holds static files (images, CSS, JavaScript) used in the project.

Installation and Setup

To run the project locally:
Clone the repository:

bash

git clone https://github.com/mdomor527461/golpokuri.git
cd golpokuri

Install dependencies:

Make sure you have Python and pip installed, then run:

bash

pip install -r requirements.txt

Set up the database:

bash

python manage.py migrate

Create a superuser (admin):

bash

python manage.py createsuperuser

Run the development server:

bash

python manage.py runserver

The application will be available at http://127.0.0.1:8000/.
Usage

    For Writers: Register as a writer, log in, and begin creating stories. Manage your published stories from the writer dashboard.
    For Readers: Register as a reader, browse categories, and read stories from the platform.
    Category Filter: Use the category filter to find stories in your preferred genre or category.

