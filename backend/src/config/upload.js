const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname,'..','..','uploads'),
        filename: (req,file,cb) => {
            const ext = path.extname(file.originalname); // extrenção do arquivo 
            const name = path.basename(file.originalname, ext); //nome do arquivo remove ext do nome do arquivo
            /************************************************************************
             *cb -  função callback, primeiro parametro pode ser informado algum erro a ser tratado
             * segundo prametro é o nome que o arquivo recebbera a ser salvo
             *************************************************************************/
            cb(null,`${name}-${Date.now()}${ext}`);
        }
    })
}