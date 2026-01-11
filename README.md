🌍 Tourist Destination App

A full-stack Tourist Destination Management Application built with Django REST Framework, React, PostgreSQL, and Docker.
Users can explore tourist destinations with images and detailed views, while admins can manage destinations through the backend.


🚀 Features

📍 Add and view tourist destinations
🖼️ Image upload and display (media handling)
📄 Detailed destination view page
🔗 RESTful APIs using Django REST Framework
🐳 Fully Dockerized setup (Backend, Frontend, Database)
🗄️ PostgreSQL database
⚡ React frontend with routing


🛠️ Tech Stack

-Backend
.Python
.Django
.Django REST Framework
.PostgreSQL
.WhiteNoise
.Pillow

-Frontend
.React
.React Router
.Fetch API

-DevOps
.Docker
.Docker Compose

📂 Project Structure


tourist_app/
├── backend/
│   ├── core/
│   ├── api/
│   ├── media/
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
⚙️ Environment Variables

Create a file backend/.env (not committed to GitHub):

Env

DEBUG=1
SECRET_KEY=your-secret-key

POSTGRES_DB=tourist_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=db
POSTGRES_PORT=5432


🐳 Run the Project with Docker (Recommended)
1️⃣ Build and start containers
Bash
docker-compose up --build
2️⃣ Run database migrations
Bash
docker-compose exec backend python manage.py migrate
3️⃣ Create superuser (optional)
Bash
docker-compose exec backend python manage.py createsuperuser

🌐 Access the Application



Frontend
http://localhost:3000
Backend API
http://localhost:8000/api/destinations/
Admin Panel
http://localhost:8000/admin


🔗 API Endpoints


GET
/api/destinations/
List all destinations
GET
/api/destinations/<id>/
Get destination details
POST
/api/destinations/
Add a destination


🖼️ Media Handling

Uploaded images are stored in the media/ directory
Media files are served by Django in development
Docker volumes ensure media persistence

🧠 What I Learned from This Project

Dockerizing a full-stack application
Handling environment variables for different environments
Debugging Docker + PostgreSQL authentication issues
Serving media files in Django
Connecting React frontend with Django REST APIs
Real-world deployment-ready project structure

🚀 Future Improvements

User authentication
Role-based access (admin/user)
Search and filter destinations
Production deployment (AWS / Render)
CI/CD pipeline

👨‍💻 Author
Ekanath ER
Full-Stack Developer
GitHub: https://github.com/ekanatherGit

⭐ If you like this project
Give it a ⭐ on GitHub — it helps a lot!