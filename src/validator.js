const schemaValidatorDecorator = schema => event => {
    return schema.validate(JSON.parse(event.Body))
        .catch(({ errors }) =>  { throw new Error(errors) });
}

module.exports = { schemaValidatorDecorator }