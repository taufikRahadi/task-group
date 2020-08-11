const { Photo } = require('../models')
const response = require('../helpers/response')

class PhotoController {
    static async index (req, res) {
        try {
            const photos = await Photo.findAll()
            res.json(response('success', 'photos data', photos))
        } catch (error) {
            res.json(response('fail', error))
        }
    }

    static async store (req, res) {
        res.json(req.file)
    }
}

module.exports = PhotoController
