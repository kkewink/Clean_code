const adminService = require("../services/adminService");

const adminController = {
    create: async (req,res) =>{
        try{
            const data = {
                nome : req.body.nome,
                email : req.body.email,
                senha : req.body.senha
            }
            const admin = await adminService.create(data);
           
            res.status(200).json({
                msg:"Admin criado",
                admin
            })

        }catch (error) {
            console.log(error);
            return res.status(400).json({
                msg: 'Erro ao tentar criar o Admin'
            })
        }
    },

    login: async(req,res) =>{
        try {
            const data = {
                email: req.body.email,
                senha: req.body.senha
            }

            const token = await adminService.login(data);

            if(!token) {
                return res.status(400).json({
                    msg:'Acesso negado'
                });
            }
            res.status(200).json({
                msg:"Admin logado",
                token
            })

        } catch (error) {
            console.log(error);
            return res.status(400).json({
                msg:'Erro ao tentar fazer login'
            })
        }
    },

    forgetP: async(req,res) =>{
        try {
            
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                msg:'Erro ao tentar alterar a senha'
            })
        }
    },

    getAll: async(req,res) =>{
        try {

            const admins = await adminService.getAll();
            console.log(admins)
            return res.status(200).json({
                msg:"Admins encontrados",
                admins
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg:"Deu um Erro chamo o joãaao"
            })
        }
    },
    
    getOne: async(req,res) =>{
        try {
            const {id} = req.params;

            const admin = await adminService.getById(id);

            if(!admin) {
                return res.status(400).json({
                    msg:'Admin nao encontrado'
                });
            }

            return res.status(200).json({
                msg:'Admin encontrado',
                admin
            });
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg:'Deu um Erro chamo o joão'
            });
        }
    },
    update: async (req,res) =>{
        try{
            const {id} = req.params;

            const data = {
                nome: req.body.nome,
                email: req.body.emai,
                senha: req.body.senha
            }

          const admin = await adminService.update(id,data);

          if(!admin){
            return res.status(400).json({
                msg:'Erro admin não encontrado'
            })
          }
          return res.status(200).json({
            msg:'admin atualizado ocm sucesso',
            admin
          })
        }catch (error) {
            return res.status(400).json({
                msg: 'Erro ao tentar atualizar o admin'
            });
        }
    },

    delete: async(req,res) => {
        try {
            const {id} = req.params;
            
            const admin = await adminService.delete(id);
            if(!admin) {
                return res.status(400).json({
                    msg:'Admin nao encontrado'
                });
            }
            return res.status(200).json({
                msg:'Admin deletado com sucesso',
                admin
            });
        } catch (error) {
            return res.status(400).json({
                msg:'Deu um Erro chamo o joão'
            });
        }
    },
}

module.exports = adminController;