const router = require('express').Router;
const thoughtController  = require('../controllers/thought-controller');

const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    updateThought,
    deleteThought, 
    addReaction,
    removeReaction,
} = require('../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts)
    .get(createThought);

router.route('/:thoughtId')
    .get(getThoughtsById)
    .post(createThought);

router.route('/:thoughtId')
    .get(getThoughtsById)
    .put(updateThought)
    .dlete(deleteThought);

router.route('/:thoughtId/reactions')
    .post(addReaction)

router.route('/:thoughtId/reactions/reactionId')
    .delete(removeReaction);

router.route('/:thoughtId/reactions')
    .get(thoughtController.getReactionsByThoughtId); 

module.exports = router; 
