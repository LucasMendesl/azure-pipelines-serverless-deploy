const createResponse = (statusCode, body) => ({
    statusCode,
    body: JSON.stringify(body)
})

module.exports = {
    createSuccessResponse: createResponse.bind(null, 200),
    createValidationResponse: createResponse.bind(null, 400)
}
