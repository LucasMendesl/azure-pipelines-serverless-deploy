const yup = require('yup')
const Bluebird = require('bluebird')
const { schemaValidatorDecorator } = require('./validator')
const { 
    createSuccessResponse, 
    createValidationResponse 
} = require('./response')

const requestSchema = yup.object().shape({
    name: yup.string()
        .required(),

    age: yup.number()
        .lessThan(18, 'ooops, you cannot be registered if you are under 18')
})

const getData = async event => 
    createSuccessResponse({ message: 'Hello Developers, This is an example api deployed by azure devops!' })

const postData = async event => {
    return Bluebird.resolve(JSON.parse(event.Body))
        .tap(schemaValidatorDecorator(requestSchema))
        .then(body => createSuccessResponse({ message: `post name ${body.name} and age ${body.age}` }))
        .catch(({ message })  => createValidationResponse({ error: message }))
}

module.exports = {
    getData,
    postData
}