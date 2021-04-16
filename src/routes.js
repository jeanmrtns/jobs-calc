const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

const profile = {
  name: 'Jean',
  avatar: 'https://github.com/jeanmrtns.png',
  "monthly-budget": 3000,
  "hours-per-day": 5,
  "days-per-week": 5,
  "vacation-per-year": 4,
}

const jobs = [
  {
    id: 1,
    name: "Pizzaria Guloso",
    "daily-hours": 2,
    "total-hours": 60,
    created_at: Date.now(), // Atribuindo a data de hoje
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 49,
    created_at: Date.now(), // Atribuindo a data de hoje
  }
]

// Request, Response => Cria as rotas da aplicação
routes.get('/', (req, res) => {


  const updatedJobs = jobs.map(job => {
    
    // Ajustes no job
    const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

    const createdDate = new Date(job.created_at)
    const dueDay =  createdDate.getDate() + Number(remainingDays) // Dia da entrega
    const dueDate = createdDate.setDate(dueDay) // Data da entrega

    return job
  })

  

  res.render(views + 'index', { jobs })
})

routes.get('/job', (req, res) => res.render(views + 'job'))

routes.post('/job', (req, res) => {
  //req.body = { name: 'asdad', 'daily-hours': '1', 'total-hours': '3' }

  const lastId = jobs[jobs.length - 1]?.id || 1

  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    created_at: Date.now() // Atribuindo a data de hoje
  })

  return res.redirect('/')
})

routes.get('/job/edit', (req, res) => res.render(views + 'job-edit'))
routes.get('/profile', (req, res) => res.render(views + 'profile', { profile })) // É possível passar um objeto no render

module.exports = routes