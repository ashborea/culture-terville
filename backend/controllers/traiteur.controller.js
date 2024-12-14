import Traiteur from '../models/traiteur.model.js';

export const getAllTraiteur = async (req, res) => {
    Traiteur.find()
    .then(traiteur => res.status(200).json(traiteur))
    .catch(error => res.status(400).json({error}));
}