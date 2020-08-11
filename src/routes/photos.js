const router = require('express').Router()
const PhotoController = require('../controllers/photo-controller')
const uploadCloudinary = require('../middleware/upload-cloudinary')

router.get('/', PhotoController.index)
    .post('/', uploadCloudinary.single('photo'), PhotoController.store)
    .patch('/:id', uploadCloudinary.single('photo', PhotoController.update))
    .delete('/:id', PhotoController.delete)

module.exports = router