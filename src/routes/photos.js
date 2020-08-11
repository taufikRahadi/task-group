const router = require('express').Router()
const PhotoController = require('../controllers/photo-controller')
const uploadCloudinary = require('../middleware/upload-cloudinary')

router.get('/', PhotoController.index)
    .post('/', uploadCloudinary.single('photo'), PhotoController.store)

module.exports = router