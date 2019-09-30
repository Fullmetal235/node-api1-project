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