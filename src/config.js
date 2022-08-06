import { config } from 'dotenv';

config();

module.exports = {
    URL_MONGO: process.env.URL_MONGO,    
}
