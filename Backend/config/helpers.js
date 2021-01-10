/*
Connecting with backend database - need a special package for it
 mysqli package on npmjs.com
*/
const MySqli = require('mysqli');

let conn = new MySqli({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passwd: 'password',
    db: 'anjali'
});


// calls emit function , setting false because db could change and could be multiple
let db = conn.emit(false, '');

// database object is going to be used in this project
module.exports = {
    database: db
};

/*module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))
}*/
