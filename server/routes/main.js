import express from 'express';
// schema
import Post from '../models/post.js';

// router
const router = express.Router();

/* ------------------------------- GET / Home ------------------------------- */
router.get('', async (req, res) => {
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
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

export default router;
