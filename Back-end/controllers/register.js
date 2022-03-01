const handleRegister = (req,res,db,bcrypt) => {
    const { email, name ,password} = req.body;
    //Check if the fields is empty
    if(!email || !name || !password){
        return res.status(400).json('incorrect form submission')
    }
    //Encrypt the password
    const hash = bcrypt.hashSync(password)
    db.transaction(trx => {
        //Insert row to login table
        trx.insert({
            hash: hash,
            email: email
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return db('users')
            .returning('*')
            //Insert row to users table
            .insert({
                email: loginEmail[0].email,
                name: name,
                joined: new Date()
            }).then(user => {
                res.json(user[0])
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json("unable to register"))
}

module.exports = {
    handleRegister: handleRegister
}