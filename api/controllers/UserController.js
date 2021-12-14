/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    async create(req, res) {
        try {
            let params = req.allParams();
            const user = await User.create({
                name: params.name,
            }).fetch();
            return res.ok(ride);
        } catch (error) {
            return res.serverError(error)
        }
    },

};