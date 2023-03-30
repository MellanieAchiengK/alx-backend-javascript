import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const fields = await readDatabase('./database.csv');
      const fieldNames = Object.keys(fields).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
      const response = ['This is the list of our students'];
      fieldNames.forEach((field) => {
        response.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      });
      res.status(200).send(response.join('\n'));
    } catch (err) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major.toUpperCase();
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
    } else {
      try {
        const fields = await readDatabase('./database.csv');
        const students = fields[major] || [];
        res.status(200).send(`List: ${students.join(', ')}`);
      } catch (err) {
        res.status(500).send('Cannot load the database');
      }
    }
  }
}

export default StudentsController;
