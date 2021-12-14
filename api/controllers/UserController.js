/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const User = require("../models/User");

module.exports = {

    async create(req, res) {
        console.log("Ejecutando create")
        try {
            let params = req.allParams();
            const user = await User.create({
                name: params.name,
            }).fetch();
            return res.ok(user);
        } catch (error) {
            return res.serverError(error)
        }
    },

};