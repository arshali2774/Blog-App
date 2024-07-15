import express from 'express';
// schema
import Post from '../models/post.js';

// router
const router = express.Router();

/* ------------------------------- GET / Home ------------------------------- */
router.get('/', async (req, res) => {
  const locals = {
    title: "Arsh's Blog",
    description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
    keywords: 'Arsh Ali Blog',
    author: 'Arsh Ali',
  };
  try {
    //pagination
    let perPage = 10;
    let page = req.query.page || 1;

    // getting needed data from database
    const data = await Post.aggregate([
      { $sort: { createdAt: -1 } },
      { $skip: perPage * (page - 1) },
      { $limit: perPage },
    ]);

    const count = await Post.countDocuments();
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);
    res.render('index', {
      locals,
      posts: data,
      currentPage: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: '/',
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ----------------------------- GET / Post :id ----------------------------- */
router.get('/post/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const locals = {
      title: post.title,
      description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
      keywords: 'Arsh Ali Blog',
      author: 'Arsh Ali',
    };
    res.render('post', {
      locals,
      post,
      currentRoute: `/post/${post._id}`,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ------------------------------- GET / About ------------------------------ */
router.get('/about', async (req, res) => {
  const locals = {
    title: 'About Arsh',
    description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
    keywords: 'Arsh Ali Blog',
    author: 'Arsh Ali',
  };
  res.render('about', {
    locals,
    currentRoute: '/about',
  });
});

/* ------------------------------ GET / Contact ----------------------------- */
router.get('/contact', async (req, res) => {
  const locals = {
    title: 'Contact',
    description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
    keywords: 'Arsh Ali Blog',
    author: 'Arsh Ali',
  };
  res.render('contact', {
    locals,
    currentRoute: '/contact',
  });
});

/* ------------------------- POST / Post - searchTerm ------------------------ */
router.post('/search', async (req, res) => {
  const locals = {
    title: 'Search',
    description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
    keywords: 'Arsh Ali Blog',
    author: 'Arsh Ali',
  };
  try {
    const searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, '');
    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
        { body: { $regex: new RegExp(searchNoSpecialChar, 'i') } },
      ],
    });
    res.render('search', {
      locals,
      searchTerm,
      data,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

export default router;
