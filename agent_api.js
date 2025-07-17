const API_KEY = 'cursor_XXX';
const BASE_URL = 'https://api.cursor.com';
const REPO_URL = 'https://github.com/example/repo-one';

async function run() {
  const { default: fetch } = await import('node-fetch');

  const create1 = await fetch(BASE_URL + '/v0/agents', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(API_KEY + ':').toString('base64'),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: { text: 'Say hello in the README' },
      source: { repository: REPO_URL }
    })
  });
  const agent1 = await create1.json();
  console.log('Agent #1:', agent1);
}

run();