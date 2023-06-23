import express from 'express';
import { donate } from '../controllers/donations.js';

const router = express.Router();

router.post('/', donate);

export default router;
