// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const unfluff = require('unfluff');

fastify.register(require('fastify-cors'), {
  origin: true
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
});

fastify.post('/unfluff', async (request) => ({
  ...unfluff(request.body)
}));

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3080)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
