import multer from 'multer';
import path from 'path';
import express from 'express';
import xlsxFiles from '../../../infrastructure/files/xlsx.files';

class ClientsMiddleware {
    uploadFile(){
        return multer({
            storage: multer.diskStorage({
                destination: (req, file, cb) => {
                    cb(null, path.resolve("uploads"))
                },
                filename: (req, file, cb) => {
                    cb(null, `${Date.now()}-${file.originalname.toLocaleLowerCase()}`)
                }
            })
        });
    }

    async parseXlsx(req: express.Request, res: express.Response, next: express.NextFunction){
        req.body.fileData = xlsxFiles.parse(req.file!.path);
        next();
    }
}

export default new ClientsMiddleware();