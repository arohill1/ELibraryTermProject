const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

// Get all orders
router.get('/', (req, res) => {
    database.table('orders_details as od')
        .join([
            {
                table: 'orders as o',
                on: 'o.id = od.order_id'
            },
            {
                table: 'books as b',
                on: 'b.id = od.book_id'
            },
            {
                table: 'users as u',
                on: 'u.id = o.user_id'
            }
        ])
        .withFields(['o.id', 'b.title as name', 'b.description', 'b.price', 'u.username'])
        .sort({id: 1})
        .getAll()
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: 'No orders found'});
            }

        }).catch(err => console.log(err));
});

/* Get a single order */
router.get('/', (req, res) => {
    const orderId = req.params.id;
    database.table('orders_details as od')
        .join([
            {
                table: 'orders as o',
                on: 'o.id = od.order_id'
            },
            {
                table: 'books as b',
                on: 'b.id = od.book_id'
            },
            {
                table: 'users as u',
                on: 'u.id = o.user_id'
            }
        ])
        .withFields(['o.id', 'b.title as name', 'b.description', 'b.price', 'u.username', 'b.image', 'od.quantity as quantityOrdered'])
        .filter({'o.id': orderId})
        .getAll()
        .then(orders => {
            if (orders.length > 0) {
                res.json(orders);
            } else {
                res.json({message: 'No order found with orderId ${orderId}'});
            }

        }).catch(err => console.log(err));
});




/* Placing a new order */
router.post('/new', (req, res) => {
    console.log("New Body: " + req.body);
    let {userId, books} = req.body;
    console.log(userId, books);
    if (userId !== null && userId > 0 && isNaN(userId)) {

        database.table('orders')
            .insert({
                user_id: userId
            }).then(newOrderId => {
            if (newOrderId > 0) {
                books.forEach(async (b) => {

                    let data = await database.table('books').filter({id: b.id}).withFields(['quantity']).get();
                    let inCart = b.incart;

                    // Deduct the number of books ordered from the quantity in database
                    if (data.quantity > 0) {
                        data.quantity = data.quantity - inCart;

                        if (data.quantity < 0) {
                            data.quantity = 0;
                        }

                    } else {
                        data.quantity = 0;
                    }

                    // insert order details according to newly generated order id
                    database.table('order_details')
                        .insert({
                            order_id: newOrderId,
                            books_id: b.id,
                            quantity: inCart
                        }).then(newId => {
                        database.table('books')
                            .filter({if: b.id})
                            .update({
                                quantity: data.quantity
                            }).then(successNum => {
                        }).catch(err => console.log(err));
                    }).catch(err => console.log(err))


                });
            } else {
                res.json({message: ' There is some error in new order while adding order details', success: false})
            }
            res.json({
                message: 'Order placed successfully. Your order id is ${newOrderId}',
                sucess: true,
                order_id: newOrderId,
                books: books
            })
        }).catch(err => console.log(err));
    } else {
        res.json({message: 'New Order Failed', success: false});
    }

});

/* Payment gateway call */
router.post('/payment', (req, res) => {
    res.send({success: true});
});

module.exports = router;
