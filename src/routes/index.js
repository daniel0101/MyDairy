import express from 'express';
import DairyController as './controllers/DairyController';
const router = express.Router();

router.get('/',DairyController.getAllDairies);

export default router;
