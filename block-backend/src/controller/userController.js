const User  = require('../../models/user');
const fAction  = require('../../models/action');
const {SERVER_URL} = require('../../config/conf')
const jwt = require("jwt-simple");

exports.register = async (req, res) => {
    let errors = [];
    if (!req.body.username) {
        errors.push({ text: 'Please Enter UserName.' });
    }
    if (!req.body.wallet) {
        errors.push({ text: 'Please Enter Address.' });
    }
    if (!req.body.badge) {
        errors.push({ text: 'Please Enter Badge Name.' });
    }
    if (!req.body.dao) {
        errors.push({ text: 'Please Enter DAO address.' });
    }
    if (!req.body.tokenaddress)
    {
        errors.push({text: 'Badge Address is required'});
    }
    if (errors.length > 0) {
        res.status(200).send({success: false, error: errors});
    } else {
        req.body.wallet = req.body.wallet.toLowerCase();
        User.findOne({ wallet: req.body.wallet }).then((user) => {
            if (user) {
               res.redirect(SERVER_URL + '/admin');
            } else {
                console.log("The request is", req)
                console.log("The token address", req.body.tokenaddress)
                const user = new User({
                    username: req.body.username,
                    wallet: req.body.wallet,
                    badge: req.body.badge,
                    dao: req.body.dao,
                    badgeAddress: req.body.tokenaddress
                });
                user.save().then((result) => {
                    console.log("User Added", user)
                    res.redirect(SERVER_URL + '/admin');
                }).catch((err) => {
                    res.status(200).send({success: false, error: err});
                });
            }
        });
    }
}

exports.login = async(req, res) => {
    User.findOne({ wallet: req.body.wallet }, (err, user) => {
        if (err) {
            res.send("Error Happened In auth /token Route");
        } else {
            if (user)
            {
                if(user.status == true){
                res.json({
                    success: true,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    url: '/onerepboard'
                });
              } else {

                res.json({
                    success: true,
                    username: "",
                    isAdmin: false,
                    url: '/walletconnect'
                });

              }
            }
            else 
                res.json({
                    success: true,
                    username: "",
                    isAdmin: false,
                    url: '/walletconnect'
                });
        }
    }); 
}

exports.logout = async(req,res)=>{
    req.logout();
    res.status(200).send({success: true});
}

//New end point added to get the current logged in user
exports.getLoggedInUser = async(req,res) => {
    console.log("The user in the request is",req.body.user)
    User.findOne({username: req.body.user}).then((user)=>{
        console.log("The user is", user)
        res.status(200).send(user)
    })
}
exports.getUserList = async(req, res) => {
    User.find({parent: req.body.master}).then((users) => {
        res.status(200).send(users);
    });
}

exports.getOneRepBoard  = async(req, res) => {
    const result = {};
    fAction.aggregate([{ $match : { parent : req.body.master }}, {$group:{_id:"$wallet", name : { $first: '$name' }, sum:{$sum: "$received"}}}, {$sort: req.body.sort}]).then((users) => {
        result.users = users;
        User.findOne({wallet: req.body.master}).then((user) => {
            User.findOne({wallet: req.body.master}).then((user) => {
                //result.isAdmin = user.isAdmin;
                // if (user.isAdmin == false)  
                // {
                    
                // }
                res.status(200).send(result);
            });
        });
    });
}
/*******************************Get DAO data********************** */
exports.getDaoData = async(req,res)=> {

    User.findOne({wallet: req.body.master}).then((user) => {
    
                if (user.isAdmin == false)  
                 {
                     console.log("inside if")
                     console.log("The user",JSON.stringify(user));
                     res.status(200).send(user);
                 }
                 else {

                    console.log("inside else")
                    User.find().then((users) => {
                        
                    console.log("The users", JSON.stringify(users));
                    res.status(200).send(users);
               
                    });
                 }
    
    });
}


// exports.getOneRepBoard  = async(req, res) => {
//     console.log("enter in api")
//     const result = {};
//     console.log("request master",req.body.master)
//     console.log("request sort",req.body.sort)
//     fAction.aggregate([{ $match : { parent : req.body.master }}, {$group:{_id:"$wallet", name : { $first: '$name' }, sum:{$sum: "$received"}}}, {$sort: req.body.sort}]).then((users) => {
//         result.users = users;
//         console.log("users list", users)
//         User.findOne({wallet: req.body.master}).then((user) => {
//             console.log("user name" , user)
//             User.findOne({wallet: req.body.master}).then((user) => {
//                 console.log("wallet ", user)
//                 result.isAdmin = user.isAdmin;
//                 if (user.isAdmin == false)  
//                 {
//                     console.log("inside if")
//                     res.status(200).send(result);
//                 }
//                 else{
//                     // logic to get all the DAO
//                     console.log("inside else if Admin")
//                     User.find().then((users) => {
//                         console.log("Users", users)
//                             res.status(200).send(users);
//                     });
//                 }
//                // res.status(200).send(result);
//             });
//         });
//     });
// }

exports.getSelOpList = (req, res) => {
    const result = {};
    fAction.aggregate([{ $match : { parent : req.body.master }}, {$group:{_id:"$name"}}]).then((users) => {
        res.status(200).send(result);
    });
}

exports.update = async (req, res) => {
    req.body.wallet = req.body.wallet.toLowerCase();
    User.findOne({wallet: req.body.wallet}).then((user) => {
        var puser = user;
        if (req.body._id == '')
        {
            console.log("Inside if req.body._id")
            if (user)
            {
                console.log("inside if ETH address");
                return res.status(200).send({error: "ETH address duplicated!", success: false});
            }
            else
            {
                console.log("inside else puser", JSON.stringify(req.body));
                puser = new User({
                    username: req.body.username,
                    parent: req.body.master,
                    wallet: req.body.wallet,
                    badge: req.body.badge,
                    dao: req.body.dao,
                    isAdmin: req.body.isAdmin,
                    status: req.body.status,
                    badgeAddress: req.body.badgeAddress
                });
            }
        }
        else
        {
            if (!puser)
            {
                console.log("if !puser");
                return res.status(200).send({error: "This accout does not exist!", success: false});
            }
            else
            {
                console.log("else puser setting");
                puser.username = req.body.username;
                puser.parent = req.body.master;
                puser.wallet = req.body.wallet;
                puser.badge = req.body.badge;
                puser.dao = req.body.dao;
                puser.isAdmin = req.body.isAdmin;
                puser.status = req.body.status;
                badgeAddress = req.body.badgeAddress
            }
        }

        puser.save().then((result) => {
            console.log("req.body.master", req.body.master);
            User.find({parent: req.body.master}).then((users) => {
                res.status(200).send({users: users, success: true});
            });
        }).catch((err) => {
            console.log(JSON.stringify(err));
            res.status(200).send({success: false, error: "Error Occured!"});
        });
    });
}

exports.delete = async (req, res) => {
    User.deleteOne({ _id: req.body._id }).then((user) => {
        User.find({parent: req.body.master}).then((users) => {
            res.status(200).send(users);
        });
    });
}

