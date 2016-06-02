var express = require('express');

// Routes for the API -- Order matters
var router = express.Router();
var fs = require('fs');
var obj;

router.get('/:dossier_id/responses/', function(req, res) {

	fs.readFile('./fakedata/questionnaire.json', 'utf8', function (err, data) {
	  if (err) throw err;
	  obj = data
	  console.log("Accessed to questionnaire.");
	});

	res.json({ message: "GET Response works. Patient with ID: " + req.params.dossier_id + ". The questionnaire...\\n " + obj});
});
// receiving pushes from app with the user's answers
router.put('/:dossier_id/respones/:id', function(req, res) {
	res.json({ message: 'POST Response works. Patient with ID: ' + req.params.dossier_id});
	console.log("Response for questionnaire saved.");
});

module.exports = router;