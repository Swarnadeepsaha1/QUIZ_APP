export function getAnswer(qnsId, answers) {
  if (qnsId && answers) {
    const selectedAns = answers?.find(ans => ans?.qnsId === qnsId)
    if (selectedAns) {
      return selectedAns?.ansId;
    }
  }
  return null;
}