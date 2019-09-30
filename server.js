//GET Request
 server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: 'The users information could not be retrieved.'                      
            });
        });
});

//GET Request with certain user
server.get('/api/users/:id', (req, res) => {
    const {id} = req.params;
    db.findById(id)
        .then(user => {
            if(user) {
                res.json(user)
            } 
            else {
                res.status(404).json({
                    message: 'The user with the specified ID does not exist.'
                });
            };
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: 'The user information could not be retrieved.'
            });
        });
});

//POST Request
server.post('/api/users', (req, res) => {
    const {name, bio} = req.body;
    db.insert(req.body)
        .then(user => {
            if(user) {
                res.status(201).json(user);
            }
            else {
                res.status(400).json({
                    message: 'Please provide a name and bio for the user.'
                });
            };
        })
        .catch(err => {
            res.status(500).json({
                err: err,
                message: 'There was an error saving user to the database.'
            });
        });
});