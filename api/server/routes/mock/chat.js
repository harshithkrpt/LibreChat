const express = require('express');
const { setHeaders } = require('~/server/middleware');
const { sendEvent } = require('@librechat/api');

const router = express.Router();

router.use(setHeaders);

router.post('/', async (req, res) => {
  const events = [
    { text: '<p>Hello from <strong>mock</strong> endpoint.</p>' },
    { text: '<p>This is a <em>mocked</em> response.</p>', final: true },
  ];

  let idx = 0;
  const interval = setInterval(() => {
    const event = events[idx];
    if (!event) {
      clearInterval(interval);
      res.end();
      return;
    }
    sendEvent(res, event);
    idx += 1;
    if (event.final) {
      clearInterval(interval);
      res.end();
    }
  }, 1000);
});

module.exports = router;
