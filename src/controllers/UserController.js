const userService = require("../services/userService");

const userController = {
    create: async (req,res) => {
        try {

            const data = {
                nome : req.body.nome,
                email: req.body.email
            }

            const user = await userService.create(data);

            return res.status(201).json({
                msg:"Usuario criado com sucesso",
                user,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Erro ao tentar criar o Usuario'
            });
        }
    },
    update: async(req,res) =>{
        try {

            const {id} = req.params;

            const data = {
                nome:req.body.nome,
                email: req.body.email
            }

            const user = await userService.update(id,data);

            if(!user){
                return res.status(400).json({
                    msg:'User nao encontrado'
                });
            }

            return res.status(200).json({
                msg:'User atualizado com sucesso',
            });

        } catch (error) {
            return res.status(500).json({
                msg:'Erro ao atualizar o User'
            });
        }
    },
    getAll: async(req,res) =>{
        try {
            const users = await userService.getAll();

            return res.status(200).json({
                msg:'Todos os usuarios!',
                users
            });
        } catch (error) {
            return res.status(500).json({
                msg:'Ocorreu um erro no Servidor'
            });
        }
    },
    getOne: async(req,res) =>{
        try {

            const {id} = req.params;
            
            const user = await userService.getById(id);

            if(!user) {
                return res.status(400).json({
                    msg:'User nao encontrado'
                });
            }
            return res.status(200).json({
                msg:'User encontrado',
                user
            });
        } catch (error) {
            return res.status(500).json({
                msg:'Erro ao puxar um'
            });
        }
    },
    delete: async(req,res) => {
        try {

            const {id} = req.params;

            const user = await userService.delete(id);

            if(!user) {
                return res.status(400).json({
                    msg:'Usuario nao encontrado'
                });
            }
            
            return res.status(200).json({
                msg:'Usuario deletado com sucesso'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Ocorreu um erro no Servidor'
            });
        }
    }
};

module.exports = userController;