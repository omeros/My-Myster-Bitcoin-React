export function spendBalance(spendAmount) {
  return async dispatch => {
    // Update the userService
    dispatch({ type: 'SPEND_BALANCE', spendAmount })
  }
}