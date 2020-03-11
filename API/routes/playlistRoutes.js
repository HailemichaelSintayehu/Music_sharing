import express from 'express'
import { addPlaylist,deletePlaylist,addSongToPlaylist,removeSongFromPlaylist,getPlaylists,getPlaylist } from '../controllers/playlistController.js';
const router = express.Router();

router.get('/',getPlaylists); //get all playlists
router.get('/:id',getPlaylist) //get a playlist
router.post('/create', addPlaylist); //add new playlist
router.delete('/delete/:id', deletePlaylist);
router.post('/add/:id', addSongToPlaylist); 
router.delete('/remove/:id', removeSongFromPlaylist); 

export default router