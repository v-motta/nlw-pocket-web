interface CreateGoalsRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalsRequest) {
  await fetch('http://localhost:3333/goal', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
