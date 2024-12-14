import express from 'express';
import { getAllTraiteur } from '../controllers/traiteur.controller.js';

const router = express.Router();

router.get('/traiteur', getAllTraiteur)


export default router;