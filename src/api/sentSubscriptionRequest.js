const BaseUrl = 'blqyca78yf.execute-api.eu-west-2.amazonaws.com'
const OperationName = 'AddEmailToMailchimp'

export const sentSubscriptionRequest = async (email) =>
  fetch(`https://${BaseUrl}/default/${OperationName}`, {
    body: JSON.stringify({
      emailAddress: email
    }),
    method: 'POST'
  })
