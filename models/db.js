var mysql   = require('mysql');
var db  = require('./db_connection.js');

/* DATABASE CONFIGURATION */
var connection = mysql.createConnection(db.config);

exports.GetAllMovie = function(callback) {
    connection.query('select * from Movie1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewMovie = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Movie1;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDMovie = function(movie1id, callback) {
    console.log(movie1id);
    var query = 'select * from Movie1 WHERE MovieID=' + movie1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertMovie = function(movie1_info, callback) {
    console.log(movie1_info);
    var query = 'INSERT INTO Movie1 (Title) VALUES (\'' + movie1_info.Title + '\')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.UpdateMovie = function(movie1_info, callback) {
    console.log(movie1_info);
    var query = 'UPDATE Movie1 SET Title=\'' + movie1_info.Title + '\' WHERE MovieID=' + movie1_info.MovieID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteMovie = function(movie1_info, callback) {
    console.log(movie1_info);
    var query = 'DELETE FROM Movie1 WHERE MovieID=' + movie1_info.movie1id + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllGenre = function(callback) {
    connection.query('select * from Genre1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewGenre = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Genre1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDGenre = function(genre1id, callback) {
    console.log(genre1id);
    var query = 'select Title, Genre from Genre1 JOIN Movie1 ON Genre1.MovieID=Movie1.MovieID WHERE GenreID=' + genre1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetByMovieIDGenre = function(movie1id, callback) {
    console.log(movie1id);
    var query = 'select Genre from Genre1 WHERE MovieID=' + movie1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertGenre = function(genre1_info, callback) {
    console.log(genre1_info);
    var query = 'INSERT INTO Genre1(MovieID, Genre) VALUES (' + genre1_info.MovieID + ', "' + genre1_info.Genre + '")';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllRating = function(callback) {
    connection.query('select * from Rating1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewRating = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from Rating1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDRating = function(rating1id, callback) {
    console.log(rating1id);
    var query = 'select Title, Username, Rating from Rating1 JOIN Movie1 ON Rating1.MovieID=Movie1.MovieID JOIN User1 ON User1.UserID=Rating1.UserID WHERE RatingID=' + rating1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.GetByMovieIDRating = function(movie1id, callback) {
    console.log(movie1id);
    var query = 'select Username, Rating from Rating1 JOIN User1 ON User1.UserID=Rating1.UserID WHERE MovieID=' + movie1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertRating = function(rating1_info, callback) {
    console.log(rating1_info);
    var query = 'INSERT INTO Rating1(MovieID, UserID, Rating) VALUES (' + rating1_info.MovieID + ', ' + rating1_info.UserID + ', ' + rating1_info.Rating + ')';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.GetAllUser = function(callback) {
    connection.query('select * from User1',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            console.log(result);
            callback(false, result);
        }
    );
}

exports.GetAllViewUser = function(callback) {
    // CREATE VIEW StudentsView AS SELECT * FROM Students;
    connection.query('select * from User1;',
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}


exports.GetByIDUser = function(user1id, callback) {
    console.log(user1id);
    var query = 'select * from User1 WHERE UserID=' + user1id;
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, result);
        }
    );
}

exports.InsertUser = function(user1_info, callback) {
    console.log(user1_info);
    var query = 'INSERT INTO User1 (Username, Firstname, Lastname) VALUES ("' + user1_info.Username + '", "' + user1_info.Firstname + '", "' + user1_info.Lastname + '")';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.UpdateUser = function(user1_info, callback) {
    console.log(user1_info);
    var query = 'UPDATE User1 SET Username="' + user1_info.Username + '", Firstname="' + user1_info.Firstname + '",  LastName="' + user1_info.Lastname + '" WHERE UserID=' + user1_info.UserID + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}

exports.DeleteUser = function(user1_info, callback) {
    console.log(user1_info);
    var query = 'DELETE FROM User1 WHERE UserID=' + user1_info.user1id + ';';
    console.log(query);
    connection.query(query,
        function (err, result) {
            if(err) {
                console.log(err);
                callback(true);
                return
            }
            callback(false, result);
        }
    );
}
