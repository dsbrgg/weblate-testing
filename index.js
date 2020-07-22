const approveEmail = require('./templates/approve-email')
const approvedWithdrawalEvent = require('./templates/approved-withdrawal-event')
const completedTaskEvent = require('./templates/completed-task-event')
const confirmationEmail = require('./templates/confirmation-email')
const confirmedDepositEvent = require('./templates/confirmed-deposit-event')
const cryptoDepositReceived = require('./templates/crypto-deposit-received')
const invitationEmail = require('./templates/invitation-email')
const manualTaskCompletion = require('./templates/manual-task-completion')
const newInvitedUserEvent = require('./templates/new-invited-user-event')
const newUserEvent = require('./templates/new-user-event')
const newWithdrawalEvent = require('./templates/new-withdrawal-event')
const orderCanceled = require('./templates/order-canceled')
const orderCreated = require('./templates/order-created')
const orderFulfilled = require('./templates/order-fulfilled')

const options = { noEscape: true }
const result = orderFulfilled({ locale: 'en', options })

console.log(result)
