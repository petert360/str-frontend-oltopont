const Model = require('../../models/vaccination.model');

exports.create = requestData => {
    const entity = new Model(requestData);
    return entity.save();
};
// A populate-et ki kell egészíteni, ha külső hivatkozás van
// pl.: exports.findAll = () => Order.find().populate('user', 'products');
exports.findAll = () => Model.find().populate('vaccine').populate('place');

exports.findOne = id => Model.findById(id).populate('vaccine').populate('place');

exports.update = (id, updateData) => Model.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Model.findByIdAndRemove(id);
