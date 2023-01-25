export const config = () => ({
  app: {
    name: process.env.APP_NAME,
    port: +process.env.PORT,
  },
  database: {
    type: process.env.DATABASE_TYPE,
    database: process.env.DATABASE_DB,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    logging: true,
    synchronize: true,
  },
});
