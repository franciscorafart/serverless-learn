module.exports.handler = async (event) => {
    console.log('payload', event);
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Testing new function',
                input: event,
            },
            null,
            2,
        )
    }
}