export default () => {
  console.log('DB_PORT:', process.env.DB_PORT);
  return {
    database: {
      type: process.env.DB_TYPE || 'postgres',
      host: process.env.DB_HOST || 'postgres',  // ✅ 'localhost' → 'postgres'로 변경
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'nest_user',
      password: process.env.DB_PASSWORD || '5584',
      database: process.env.DB_NAME || 'nest_project',
    },
  };
};
