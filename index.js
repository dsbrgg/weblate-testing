const approveEmail = require('./templates/approve-email')
const approvedWithdrawalEvent = require('./templates/approved-withdrawal-event')
const completedTaskEvent = require('./templates/completed-task-event')
const confirmationEmail = require('./templates/confirmation-email')
const confirmedDepositEvent = require('./templates/confirmed-deposit-event')
const cryptoDepositReceived = require('./templates/crypto-deposit-received')

const options = { noEscape: true }
const result = cryptoDepositReceived({ locale: 'en', options })

console.log(result)
