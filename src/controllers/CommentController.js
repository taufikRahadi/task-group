const { Comment } = require('../models')

const response = {
    message: "Your Message",
    status: "",
    data: [],
  };

class CommentController{
        static async saveComment(req, res) {
            const { content, photoId, contactId } = req.body;
            try {
                const save = await Comment.create({
                content: content,
                photoId: photoId,
                contactId: contactId
                });
                response.data = save;
                response.message = "Succes save data";
                res.status(201).json(response);
            } catch (error) {
                res.data = [];
                response.message = "failed save data";
                res.status(400).json(response);
            }
        }

          static async updateComment(req, res){
            const { id } = req.params;
            const { content, photoId, contactId } = req.body;
            const getComment = await Comment.update({ content, photoId, contactId },
            {
                where: {
                    id: id
                }
            });
            try {
                if (getComment) {
                    response.message = "update data berhasil";
                    response.data = await Comment.findByPk(id);
                    res.status(200).json(response);
                }
            } catch (err) {
                response.data = [];
                response.message = err.message;
                res.status(400).json(response);
            }

        }
            static async deleteComment(req, res){
                const { id } = req.params;
                const delComment = await Comment.destroy({ where: {
                id: id
                }});

                try {
                    if (delComment) {
                    const dataComment = await Comment.findAll({});
                    response.data = dataComment;
                    response.message = "Delete succes";
                    res.status(200).json(response);
                }
                } catch (err) {
                    response.status = "Data tidak ada";
                    response.message = err.message;
                    res.status(400).json(response);
            }
        }
            static async getComment(req, res){
            try {
                const allData = await Comment.findAll({});
                if (allData.length !== 0) {
                    response.data = allData;
                    response.message = "succes"
                    res.status(200).json(response);
                } else {
                    response.status = "failed!";
                    response.message = "Data not found!";
                    res.status(400).json(response);
                }
            } catch (err) {
                    response.status = "failed";
                    response.message = err.message;
                    res.status(400).json(response);
            }
          }

            static async getCommentId(req, res) {
                const { id } = req.params;
                const comment = await Comment.findByPk(id);
                try {
                if (!comment) throw new Error("Comment not found");
                response.data = comment;
                response.status = "success";
                res.json(response);
                } catch (error) {
                response.message = error.message;
                response.data = {};
                response.status = "fail";
                res.status(404).json(response);
            }
        } 

    }        
    module.exports = CommentController;



