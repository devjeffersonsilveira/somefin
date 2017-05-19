import express from 'express';
import db from 'sqlite';                                       // <=
import Promise from 'bluebird';

const app = express();
const port = process.env.PORT || 3000;

app.get('/posts', async (req, res, next) => {
  try {
    const posts = await db.all('SELECT * FROM Post LIMIT 10'); // <=
    res.send(posts);
  } catch (err) {
    next(err);
  }
});

Promise.resolve()
  // First, try to open the database
  .then(() => db.open('./database.sqlite', { Promise }))      // <=
  // Update db schema to the latest version using SQL-based migrations
  .then(() => db.migrate({ force: 'last' }))                  // <=
  // Display error message if something went wrong
  .catch((err) => console.error(err.stack))
  // Finally, launch the Node.js app
  .finally(() => app.listen(port));
