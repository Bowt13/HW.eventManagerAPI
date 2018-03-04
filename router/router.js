const Router = require('express').Router
const events = require('./../models/events')
const router = new Router()
const currentDate = Date.now()
const prepareDate = (dateArray) => {
  let day = dateArray[0]
  let month = dateArray[1]
  let year = dateArray[2]
  dateArray[0] = year
  dateArray[1] = month
  dateArray[2] = day
  return setDate = dateArray.join("-")
	}
const updatedResult = []

router.get('/events', (req, res) => {
  events.findAll({
    attributes: ['title', 'start_date', 'end_date']
  })
  .then(result => {
    result.forEach(function(currentValue) {
      const setEndDate = Date.parse(prepareDate(currentValue.dataValues.end_date.split("-")))
      if (setEndDate >= currentDate) {
        updatedResult.push(currentValue)
      }
    })
    res.json(updatedResult)
  })
  .catch(err => {
    console.error(err)
    res.status(500)
    res.json({ message: 'Oops! There was an error getting the events. Please try again.'})
  })
})

router.get('/events/:id', (req, res) => {
  events.findById(req.params.id)
  .then(result => {
    if (result) {
      res.json(result)
    } else {
        res.status(404)
        res.json({ message: 'event not found!' })
      }
  })
  .catch(err => {
    console.error(err)
    res.status(500)
    res.json({ message: 'Oops! There was an error getting the events. Please try again' })
  })
})

router.post('/events', (req, res) => {
  const event = req.body
  const setStartDate = Date.parse(prepareDate(event.start_date.split("-")))
  const setEndDate = Date.parse(prepareDate(event.end_date.split("-")))
  if (setStartDate >= currentDate && setStartDate <= setEndDate) {
    events.create(event)
      .then(entity => {
        res.status(201)
        res.json(entity)
      })
      .catch(err => {
        console.error(err)
        res.status(422)
        res.json({ message: 'Oops! There was an error. Please try again.'})
      })
  } else {
    if (setEndDate <= setStartDate) {
      res.status(401).send({
      message: `Your end date:${event.end_date} is earlier then your start date:${event.start_date}.`})
    } else {
    res.status(401).send({
    message: `Please pick a start date after today.`})
    }
  }
})

router.put('/events/:id', (req, res) => {
  const eventId = Number(req.params.id)
  const updates = req.body
  events.findById(req.params.id)
    .then(entity => {
      return entity.update(updates)
    })
    .then(final => {
      res.send(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong.`,
        error
      })
    })
})

router.delete('/events/:id', (req, res) => {
  const eventId = Number(req.params.id)
  events.findById(req.params.id)
    .then(entity => {
      return entity.destroy()
    })
    .then(_ => {
      res.send({
        message: 'The event was deleted succesfully.'
      })
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong.`,
        error
      })
    })
})

module.exports = router
