import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const locals = {
    title: "Arsh's Blog",
    description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
    keywords: 'Arsh Ali Blog',
    author: 'Arsh Ali',
  };
  res.render('index', { locals });
});

export default router;
