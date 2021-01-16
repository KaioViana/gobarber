import { Router } from 'express'
import User from './app/models/User'


const routes = new Router()

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Kaio',
        email: 'kaio_email',
        password_hash: '11234566'
    })

    return res.json({user})
})

export default routes