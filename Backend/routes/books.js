const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');


/* GET all products */
router.get('/', function(req, res) {
  //res.render('index', { title: 'Express' });
  // to display number of books per page

  let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page: 1;  // set current page number
  const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
  let startValue;
  let endValue;

  if (page > 0) {
    startValue = (page * limit) - limit;     // 0, 10, 20, 30
    endValue = page * limit;                  // 10, 20, 30, 40
  } else {
    startValue = 0;
    endValue = 10;
  }

//linking database

  database.table('books as b')
      .join([
        {
          table: "categories as c",
          on: `c.id = b.cat_id`
        }
      ])
      .withFields(['c.title as category',
        'b.title as name',
        'b.price',
        'b.quantity',
        'b.description',
        'b.image',
        'b.id'
      ])
      .slice(startValue, endValue) // gives only cells in particular range
      .sort({id: .1}) //sort according to id
      .getAll() // fetches all books
      .then(books => {
        if (books.length > 0) {
          res.status(200).json({
            count: books.length,
            books: books
          });
        } else {
          res.json({message: "No books found"});
        }
      })
      .catch(err => console.log(err));
});

/* Get one product  */
router.get('/:bookId', function(req, res) {
let bookId = req.params.bookId;
console.log(bookId);
  database.table('books as b')
      .join([
        {
          table: "categories as c",
          on: `c.id = b.cat_id`
        }
      ])
      .withFields(['c.title as category',
        'b.title as name',
        'b.price',
        'b.quantity',
        'b.description',
        'b.image',
        'b.images',
        'b.id'
      ])
      .filter({'b.id': bookId})
      .sort({id: .1}) //sort according to id
      .get() // fetches all books
      .then(book => {
        if(book){
          res.status(200).json(book);
        } else {
          res.json({message: 'No book found with book id ${bookId}' });
        }
      })
      .catch(err => console.log(err));


});

/* Get all products  from one particular category */
router.get('/category/:catName', function(req, res) {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;   // check if page query param is defined or not
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;      // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }

    // Get category title value from param
    const cat_title = req.params.catName;

    database.table('books as b')
        .join([
            {
                table: "categories as c",
                on: `c.id = b.cat_id WHERE c.title LIKE '%${cat_title}%'`
            }
        ])
        .withFields(['c.title as category',
            'b.title as name',
            'b.price',
            'b.description',
            'b.quantity',
            'b.image',
            'b.id'
        ])
        .slice(startValue, endValue)
        .sort({id: 1})
        .getAll()
        .then(books => {
            if (books.length > 0) {
                res.status(200).json({
                    count: books.length,
                    products: books
                });
            } else {
                res.json({message: `No products found matching the category ${cat_title}`});
            }
        }).catch(err => res.json(err));


});



module.exports = router;
