export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  host: process.env.HOST || '127.0.0.1',
  graphiql: !!Number(process.env.GRAPHIQL),
  origins: process.env.ORIGINS.split(','),
});
