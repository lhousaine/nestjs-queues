export default async function heavyTaskWorker(job: any) {
  console.log(`Processing job ${job.id}...`);
  const { data } = job;

  // Simulate a heavy synchronous task
  let result = 0;
  for (let i = 0; i < 1e8; i++) {
    result += i * data.multiplier;
  }

  console.log(`Job ${job.id} completed with result: ${result}`);
  return result;
}
