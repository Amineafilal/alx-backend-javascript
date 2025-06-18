// full_server/server.js
import express from 'express';
import router from './routes/index';

const app = express();

app.use('/', router);

// ✅ THIS IS ESSENTIAL
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

export default app;

