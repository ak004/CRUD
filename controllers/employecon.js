const express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
const Employee = require('../models/employeemodel')


router.get('/', (req, res) => {
    res.render('../views/employe/addoredit.hbs',{
        viewtitle: "Insert Employee details"
    });
})

router.post('/', (req, res) => {
    if (req.body._id == '')
     insertrec(req, res);
     else
     updateRecord(req, res);
});

 function insertrec(req, res) {
     var employee = new Employee();
     employee.fullname = req.body.fullname;
     employee.email = req.body.email;
     employee.mobile = req.body.mobile;
     employee.city = req.body.city;
     employee.save((err, doc) => {
      if (!err)
         res.redirect('employee/list');
      else{
          if (body != 0){
          res.render("employe/addoredit.hbs", {
              viewtitle:"insert Employee",
              employee: req.body
          });
        }
    
      else 
          console.log('erroe during the insertion: ' + err);
    }
     });
    
 }

router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render('../views/employe/list.hbs', {
                list: docs
            })
        }
        else {
            console.log('error in retriving employee lisst: '+ err);
        }
    })
});

function updateRecord(req, res) {
    Employee.findOneAndUpdate({_id: req.body._id}, req.body,{new: true}, (err, doc) => {
        if (!err) {res.redirect('employee/list');}
        else {
            console.log('error failed to update: ' + err)
        }
    })
}
 
router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("../views/employe/addoredit.hbs",{
                viewtitle: "upadate Employee",
                employee: doc
            })
        }
    })
});
 
router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect(req.get('referer'));
        }
        else {console.log('error in deleting : '+ err);}
    })
});
module.exports = router;