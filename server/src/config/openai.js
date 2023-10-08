/* // This code is for v4 of the openai package: npmjs.com/package/openai
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

module.exports = class openai {
    static configuration() {
        const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(confguration);
    }

    static textCompletion({prompt}) {
        return{
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
} */

// This code is for v4 of the openai package: npmjs.com/package/openai
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

module.exports = class openai {
    static configuration () {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });
        return new OpenAIApi(configuration);
    }

    static textCompletion({prompt}) {
        return{
            model: "gpt-3.5-turbo",
            prompt: `${prompt}`,
            temperature: 1,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    }
}

