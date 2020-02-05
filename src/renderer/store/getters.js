export default {
  mailCounts: state => {
    const result = {}
    state.accounts.forEach(acc => {
      result[acc.email] = 0
    })
    state.messages.forEach(msg => {
      if (!msg.read) {
        result[msg.email]++
      }
    })
    return result
  },
  filteredMessages: state =>
    state.messages.filter(
      msg => !state.selected || msg.email === state.selected
    ),
  selectedAccount: state =>
    state.accounts.find(acc => acc.email === state.selected)
}