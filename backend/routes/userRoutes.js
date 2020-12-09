import express from 'express'
import {
  registerUser,
  authUser,
  getUserProfile,
  getUserById,
  updateUserProfile
} from '../controllers/userController.js'
import protect from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/login').post(authUser)

router.route('/').post(registerUser)

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.route('/:id').get(getUserById)

export default router
