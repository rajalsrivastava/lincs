import postgres from 'postgres';

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/mydb';

const client = postgres(connectionString, {
    prepare:false}
)

export default client;
