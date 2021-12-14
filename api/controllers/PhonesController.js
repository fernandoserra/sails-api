/**
 * PhonesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Phones = require("../models/Phones");

module.exports = {
  
    async create(req, res) {
        console.log("Ejecutando create")
        try {
            let params = req.allParams();
            const phone = await Phones.create({
                phone: params.phone,
            }).fetch();
            return res.ok(phone);
        } catch (error) {
            return res.serverError(error)
        }
    },

};