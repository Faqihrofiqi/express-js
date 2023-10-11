// console.log("hello world")

var express = require('express');
var app= express();
var things=require('./things');
var pool =require('./queries');
app.use('/things', things);

function getFilm() {
  return new Promise((resolve, reject) => {
    pool.query(
      'SELECT * FROM film order by film_id ASC',
      (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      },
    )
  });
}

function getFilmById(id) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM film WHERE film_id=${id}`,
      (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      },
    )
  });
}

function getFilmByCategoryId(catId) {
  return new Promise((resolve, reject) => {
    pool.query(
      `SELECT * FROM film f INNER JOIN ( SELECT fc.film_id FROM film_category fc WHERE fc.category_id = ${catId}) j ON f.film_id = j.film_id`,
      (err, rows) => {
        if (err) {
          reject(err);
        }
        resolve(rows);
      },
    )
  });
}

module.exports = {
  getFilm,
  getFilmById,
  getFilmByCategoryId
};

function getCategories() {
    return new Promise((resolve, reject) => {
      pool.query(
        `SELECT * FROM category order by category_id ASC`,
        (err, rows) => {
          if (err) {
            reject(err);
          }
          resolve(rows);
        },
      )
    });
  }
  
pool.connect((err,res)=>{
    console.log(err);
    console.log('connected');

})

app.listen(3000)