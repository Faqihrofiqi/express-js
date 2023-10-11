var express =require('express');
var router= express.Router();

router.get('/:name',function(req,res){
    res.send('Hello Rakamin'+req.params.name);
});

router.post('/',function(req,res){
    res.send('Helooo Rakamin from post')
})
router.put('/put',function(req,res){
    res.send('Helooo Rakamin from put')
})

router.get("/", (req, res) => {
    filmControllers.getFilm(req, res);
});

router.get("/:id", (req, res) => {
    filmControllers.getFilmById(req, res);
});

router.get("/category/:catId", (req, res) => {
    filmControllers.getFilmByCategoryId(req, res);
});

router.get("/", (req, res) => {
    categoryControllers.getCategories(req, res);
});

module.exports=router;