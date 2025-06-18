// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv[2];

    readDatabase(filePath)
      .then((fields) => {
        let response = 'This is the list of our students\n';
        const sortedFields = Object.keys(fields).sort();

        for (const field of sortedFields) {
          const list = fields[field];
          response += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
        }

        res.status(200).send(response.trim());
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((fields) => {
        const list = fields[major];
        if (list) {
          res.status(200).send(`List: ${list.join(', ')}`);
        } else {
          res.status(200).send('List:');
        }
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
