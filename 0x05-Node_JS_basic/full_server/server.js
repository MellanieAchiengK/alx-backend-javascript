import express from 'express';
import AppController from './controllers/AppController';
import StudentsController from './controllers/StudentsController';
import routes from './routes';

const app = express();

// Link routes to controllers
app.get('/', AppController.getHomepage);
app.get('/students', StudentsController.getAllStudents);
app.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Set the port to 1245
const port = 1245;

// Export the app
export default app;
