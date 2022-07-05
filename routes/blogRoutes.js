const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

router.get('/create', (req, res) => {
    res.render('create', { title: 'New Blog' , blog : { title : "" , snippet : "" , body : ""}});
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(blog => {
        Blog.findByIdAndDelete(id)
        .then(() => {
            res.render('create', { title: 'Edit Blog', blog });
        })
        .catch(err => {
            res.status(404).render('404', { title: '404', content: err.toString() });
        });
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('index', { blogs: result, title: 'All Blogs' });
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

router.post('/', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
    .then(result => {
        res.redirect('/blogs');
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/blogs' });
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.json({ redirect: '/blogs/edit/'+id});
    })
    .catch(err => {
        res.status(404).render('404', { title: '404', content: err.toString() });
    });
});

module.exports = router;