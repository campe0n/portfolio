const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/resume', (req, res) => {
    res.render('resume');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});


module.exports = router;