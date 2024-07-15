import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// schema
import Post from '../models/post.js';
import User from '../models/user.js';

// router
const router = express.Router();
// admin layout
const adminLayout = '../views/layouts/admin';

const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
      next();
    } catch (error) {
      res.status(401).json({
        message: 'Unauthorized',
      });
    }
  } else {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

/* ------------------------------- GET / Admin - Login Page ------------------------------- */
router.get('/admin', async (req, res) => {
  try {
    const locals = {
      title: "Arsh's Blog",
      description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
      keywords: 'Arsh Ali Blog',
      author: 'Arsh Ali',
    };
    res.render('admin/index', {
      locals,
      layout: adminLayout,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ---------------------- POST / Admin - Register Page ---------------------- */
// router.post('/admin/register', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     // create user
//     const user = new User({
//       username,
//       password: hashedPassword,
//     });
//     // save user to database
//     await user.save();
//     // build success page
//     res.status(201).json({
//       message: 'User created successfully',
//     });
//   } catch (error) {
//     // build error page
//     res.status(409).json({
//       message: 'User already exists',
//     });
//   }
// });

/* ------------------------------- POST / Admin - Login Page ------------------------------- */
router.post('/admin', async (req, res) => {
  try {
    const { username, password } = req.body;
    // find user by username
    const user = await User.findOne({ username });
    // check if user exists
    if (!user) {
      // build error page
      return res.status(401).json({
        message: 'Invalid username or password',
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: 'Invalid username or password',
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET
    );
    res.cookie('token', token, {
      httpOnly: true,
    });
    res.redirect('/dashboard');
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ---------------------- GET / Admin - Dashboard Page ---------------------- */
router.get('/dashboard', authMiddleware, async (req, res) => {
  try {
    const locals = {
      title: 'Dashboard',
      description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
      keywords: 'Arsh Ali Blog',
      author: 'Arsh Ali',
    };
    const data = await Post.find();
    res.render('admin/dashboard', {
      locals,
      posts: data,
      layout: adminLayout,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ---------------------- GET / Admin - Create New Post --------------------- */
router.get('/add-post', authMiddleware, async (req, res) => {
  try {
    const locals = {
      title: 'Create New Post',
      description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
      keywords: 'Arsh Ali Blog',
      author: 'Arsh Ali',
    };
    res.render('admin/add-post', {
      locals,
      layout: adminLayout,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ---------------------- POST / Admin - Add New Post ---------------------- */
router.post('/add-post', authMiddleware, async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    await post.save();
    res.redirect('/dashboard');
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ---------------------- GET / Admin - Edit Post -------------------------- */
router.get('/edit-post/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const locals = {
      title: 'Edit Post',
      description: 'A blog app made with Node.js, Express, EJS, and MongoDB',
      keywords: 'Arsh Ali Blog',
      author: 'Arsh Ali',
    };
    res.render('admin/edit-post', {
      locals,
      post,
      layout: adminLayout,
    });
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ------------------------- PUT / Admin - Edit Post ------------------------ */
router.put('/edit-post/:id', authMiddleware, async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      {
        title,
        body,
        updatedAt: Date.now(),
      },
      {
        new: true,
      }
    );
    res.redirect(`/edit-post/${post._id}`);
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ------------------------- DELETE / Admin - Delete Post -------------------- */
router.delete('/delete-post/:id', authMiddleware, async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/dashboard');
  } catch (error) {
    // build error page
    console.log(error);
  }
});

/* ------------------------- GET / Admin - Logout --------------------------- */
router.get('/logout', async (req, res) => {
  try {
    res.clearCookie('token');
    res.redirect('/');
  } catch (error) {
    // build error page
    console.log(error);
  }
});

export default router;
