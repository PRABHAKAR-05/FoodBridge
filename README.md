# FoodBridge 🌱

**A MERN Stack Food Redistribution Platform**

FoodBridge is a full-stack web application designed to bridge the gap between food donors and distributors. It enables organizations and individuals to donate surplus food while allowing distributors to collect and redistribute it to those in need. With role-based access controls, real-time inventory tracking, and secure authentication, FoodBridge makes food redistribution efficient, transparent, and scalable.

---

## ✨ Features

- 🔐 **Role-Based Access Control** - Separate dashboards for Donors, Distributors, and Admins
- 📊 **Real-Time Inventory Tracking** - Track food items, quantities, and availability
- 🔑 **JWT Authentication** - Secure user login and registration with token-based auth
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast & Modern UI** - Built with React + Vite for optimal performance
- 📦 **MongoDB Integration** - Persistent data storage with Mongoose schemas
- 🎨 **Tailwind CSS Styling** - Clean, modern, and customizable UI components
- 🔄 **State Management** - Zustand for efficient client-side state handling
- ✅ **Form Validation** - Server and client-side validation for data integrity
- 📧 **Email Notifications** - Automated alerts for donation and collection updates
- 🗺️ **Location-Based Filtering** - Find food donations near your area

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Zustand** - Lightweight state management
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Secure authentication tokens
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management
- **Cors** - Cross-origin resource sharing

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - [Local installation](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud database)
- **Git** - [Download](https://git-scm.com/)

---

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/foodbridge.git
cd foodbridge
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file in backend directory
touch .env
```

Add the following to your `.env` file:

```env
# Database
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/foodbridge?retryWrites=true&w=majority

# JWT
JWT_SECRET=your_super_secret_jwt_key_here_change_this

# Server
PORT=5000
NODE_ENV=development

# Email (optional, for notifications)
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

```bash
# Start the backend server
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

Open a **new terminal** in the project root:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file in frontend directory
touch .env.local
```

Add the following to your `.env.local` file:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

```bash
# Start the development server
npm run dev
```

The frontend will run on `http://localhost:5173` (or the next available port)

---

## 📁 Project Structure

```
foodbridge/
│
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Donation.js
│   │   └── Distribution.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   ├── donations.js
│   │   ├── distributions.js
│   │   └── users.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── donationController.js
│   │   ├── distributionController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── DashboardLayout.jsx
│   │   │   └── DonationForm.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── DonorDashboard.jsx
│   │   │   ├── DistributorDashboard.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── store/
│   │   │   └── useStore.js (Zustand store)
│   │   │
│   │   ├── api/
│   │   │   └── axiosConfig.js
│   │   │
│   │   ├── styles/
│   │   │   └── index.css
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── .env.local
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 📚 Usage Guide

### For Donors

1. **Sign Up** - Create an account as a Donor
2. **Post a Donation** - Fill in food details (type, quantity, expiry date, pickup location)
3. **Track Status** - View which distributors have claimed your donation
4. **Complete Handoff** - Mark donation as completed once picked up

### For Distributors

1. **Sign Up** - Create an account as a Distributor
2. **Browse Donations** - View available food donations on a map or list view
3. **Claim Food** - Request a donation and coordinate pickup
4. **Redistribute** - Track and distribute food to end recipients
5. **Generate Reports** - View distribution statistics and impact

### For Admins

1. **Manage Users** - Approve, suspend, or deactivate user accounts
2. **Monitor Donations** - View all donations and distributions
3. **Generate Reports** - Analytics on food redistribution impact
4. **System Settings** - Configure notifications, locations, and food categories

---

## 🔌 API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | User login |
| POST | `/api/auth/logout` | User logout |
| GET | `/api/auth/me` | Get current user profile |

### Donations

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/donations` | Get all donations |
| GET | `/api/donations/:id` | Get donation details |
| POST | `/api/donations` | Create new donation |
| PUT | `/api/donations/:id` | Update donation |
| DELETE | `/api/donations/:id` | Delete donation |
| POST | `/api/donations/:id/claim` | Claim a donation |

### Distributions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/distributions` | Get all distributions |
| GET | `/api/distributions/:id` | Get distribution details |
| POST | `/api/distributions` | Create distribution record |
| PUT | `/api/distributions/:id` | Update distribution status |

### Users (Admin Only)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| PUT | `/api/users/:id/role` | Update user role |
| DELETE | `/api/users/:id` | Delete user account |

---

## 🔐 Authentication

FoodBridge uses JWT (JSON Web Tokens) for secure authentication:

1. User logs in with email and password
2. Server validates credentials and issues a JWT token
3. Token is stored in browser's local storage
4. Subsequent API requests include the token in the Authorization header
5. Server verifies token before processing requests
6. Token expires after 24 hours (configurable)

---

## 🛠️ Development

### Running in Development Mode

```bash
# Terminal 1 - Backend
cd backend
npm run dev  # Uses nodemon for auto-reload

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Building for Production

```bash
# Frontend
cd frontend
npm run build  # Creates optimized build in dist/

# Backend
cd backend
npm start  # Uses NODE_ENV=production
```

### Code Quality

```bash
# Lint code (if configured)
npm run lint

# Format code (if configured)
npm run format
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

---

## 📦 Deployment

### Deploying Backend

#### Option 1: Render.com (Recommended)
1. Push code to GitHub
2. Connect GitHub repo to Render
3. Set environment variables in Render dashboard
4. Deploy

#### Option 2: Heroku
```bash
heroku login
heroku create foodbridge-backend
heroku config:set MONGODB_URI=your_mongodb_uri
git push heroku main
```

#### Option 3: Railway.app or Vercel
- Follow their specific deployment guides

### Deploying Frontend

#### Option 1: Vercel (Recommended for Vite)
```bash
npm install -g vercel
vercel
```

#### Option 2: Netlify
```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

1. **Fork** the repository
   ```bash
   git clone https://github.com/YOUR-USERNAME/foodbridge.git
   ```

2. **Create a Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Add comments for complex logic
   - Follow the existing code style

4. **Commit Your Changes**
   ```bash
   git commit -m "Add amazing feature: description"
   ```

5. **Push to Your Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Describe what you changed and why
   - Link any related issues
   - Wait for review and feedback

### Contribution Guidelines
- Follow the existing code structure
- Write meaningful commit messages
- Test your changes before submitting
- Document any new features
- Be respectful and constructive

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to use, modify, and distribute this project, provided you include the original license notice.

---

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Make sure MongoDB is running locally or use MongoDB Atlas connection string

### CORS Error
```
Access to XMLHttpRequest has been blocked by CORS policy
```
**Solution:** Check backend `.env` has correct FRONTEND_URL and CORS is properly configured

### Port Already in Use
```
Error: listen EADDRINUSE :::5000
```
**Solution:** Change PORT in `.env` or kill the process using that port

### Blank Page on Frontend
- Check browser console for errors (F12)
- Verify VITE_API_BASE_URL in `.env.local`
- Clear browser cache and restart dev server

---

## 📞 Contact & Support

**Maintainer:** [Your Name]
- **GitHub:** [@yourprofile](https://github.com/yourprofile)
- **Email:** your.email@example.com
- **LinkedIn:** [Your Profile](https://linkedin.com/in/yourprofile)

### Getting Help
- Check existing [Issues](https://github.com/your-username/foodbridge/issues)
- Create a new issue with detailed description
- Join our [Discord Community](#) (if applicable)

---

## 🙏 Acknowledgments

- **MongoDB** - NoSQL database solution
- **React** - Frontend framework
- **Express.js** - Backend framework
- **Tailwind CSS** - UI styling
- **Zustand** - State management
- **Community Contributors** - Thanks to everyone who contributed!

---

## 📈 Roadmap

- [ ] Mobile app (React Native)
- [ ] Real-time notifications (Socket.io)
- [ ] AI-powered food demand prediction
- [ ] Integration with food banks and NGOs
- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] QR code tracking for donations
- [ ] Community rating system

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Initial release
- ✅ Basic donation and distribution features
- ✅ Role-based access control
- ✅ JWT authentication

### Upcoming
- Planned features for v1.1.0 (planned release date)

---

**Made with ❤️ for a better world** 🌍
