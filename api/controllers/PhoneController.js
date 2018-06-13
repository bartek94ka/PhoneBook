/**
 * ArticleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function(req, res){
        Phone.find({}).exec(function(err, phones){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('phone/list', {phones:phones});
        });
    },
    create:function(req, res){
        var firstName = req.body.firstName;
        var lastName = req.body.lastName;
        var number = req.body.number;


        Phone.create({firstName:firstName, lastName:lastName, number:number}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }
            res.redirect('/phone/list');
        });
    },
    delete: function(req, res){
        Phone.destroy({id:req.params.id}).exec(function(err){
            if(err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/phone/list');
        });

        return false;
    },
};

