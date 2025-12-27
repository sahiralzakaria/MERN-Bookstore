const express = require('express');
const router = express.Router();
const Joi = require('joi');
const { Author } = require('../models/Author')


const authors = [
    {
        id: 1,
        firstName: "Sahir",
        lastName: "ALZAKARIA",
        nationality: "Syrian",
        image: "default-img.png"
    },
    {
        id: 2,
        firstName: "Ahmed",
        lastName: "Al-Hassan",
        nationality: "Jordanian",
        image: "default-img.png"
    },
    {
        id: 3,
        firstName: "Mohammad",
        lastName: "Al-Farouq",
        nationality: "Saudi",
        image: "default-img.png"
    },
    {
        id: 4,
        firstName: "Yousef",
        lastName: "Al-Masri",
        nationality: "Egyptian",
        image: "default-img.png"
    },
    {
        id: 5,
        firstName: "Khaled",
        lastName: "Al-Tamimi",
        nationality: "Palestinian",
        image: "default-img.png"
    }
];

/**
 * @desc Get all authors
 * @route /api/authors
 * @method GET
 * @access public
*/
router.get('/', async (req, res) => {



    try {
        const authorList = await Author.find();
        res.status(200).json(authorList);
    } catch (error) {
        console.log("error : ", error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});

/**
 * @desc Get author by id
 * @route /api/authors/:id
 * @method GET
 * @access public
*/
router.get('/:id', async (req, res) => {

    try {
        const author = await Author.findById(req.params.id);
        if (author) {
            res.status(200).json(author);
        } else {
            res.status(404).json({ message: 'the author not found' })
        }
    } catch (error) {
        console.log("error : ", error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});

/**
 * @desc create new author
 * @route /api/authors
 * @method POST
 * @access public
*/

router.post('/', async (req, res) => {

    const { error } = validateCreateAuthor(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const author = new Author({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nationality: req.body.nationality,
            image: req.body.image
        });

        const result = await author.save();
        res.status(201).json(result);

    } catch (error) {
        console.log("error : ", error);
        res.status(500).json({ message: 'Something went wrong!' });
    }
});


/**
 * @desc Update an author
 * @route /api/authors/:id
 * @method PUT
 * @access public
*/

router.put('/:id', async (req, res) => {

    const { error } = validateUpdateAuthor(req.body);

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const author = await Author.findByIdAndUpdate(req.params.id, {
            $set: {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                nationality: req.body.nationality,
                image: req.body.image
            }
        }, { new: true })

        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong!' });
    }

})

/**
 * @desc Delete an author
 * @route /api/authors/:id
 * @method DELETE
 * @access public
*/

router.delete('/:id', (req, res) => {

    const author = authors.find(b => b.id === parseInt(req.params.id));
    if (author) {
        res.status(200).json({ message: 'author has been deleted' });
    } else {
        res.status(404).json({ message: 'author not found' })
    }

})


// validate create author

function validateCreateAuthor(obj) {
    const schema = Joi.object({
        firstName: Joi.string().trim().min(3).max(200).required(),
        lastName: Joi.string().trim().min(3).max(200).required(),
        nationality: Joi.string().trim().min(3).max(200).required(),
        image: Joi.string(),
    });

    return schema.validate(obj);
}

// validate update author

function validateUpdateAuthor(obj) {
    const schema = Joi.object({
        firstName: Joi.string().trim().min(3).max(200),
        lastName: Joi.string().trim().min(3).max(200),
        nationality: Joi.string().trim().min(3).max(200),
        image: Joi.string(),
    });

    return schema.validate(obj);
}


module.exports = router;