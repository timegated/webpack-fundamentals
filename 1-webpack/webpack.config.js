module.exports = env => {
    console.log(env)
    return {
        output: {
            filename: 'bundle.js'
        }
    };
};