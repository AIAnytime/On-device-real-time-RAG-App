import {FilesetResolver, LlmInference} from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai';

const input = document.getElementById('input');
const output = document.getElementById('output');
const submit = document.getElementById('submit');
const fetchButton = document.getElementById('fetch');

const modelFileName = 'gemma-2b-it-gpu-int4.bin'; 

/**
 * Display newly generated partial results to the output text box.
 */
function displayPartialResults(partialResults, complete) {
  output.textContent += partialResults;

  if (complete) {
    if (!output.textContent) {
      output.textContent = 'Result is empty';
    }
    submit.disabled = false;
  }
}

/**
 * Fetches data from the input URL and populates the input box.
 */
async function fetchData() {
    const urlInput = document.getElementById('urlInput').value;
    const base_url = "https://r.jina.ai/";
    const full_url = base_url + urlInput;
    const headers = new Headers({
        "Accept": "text/event-stream"
    });

    try {
        const response = await fetch(full_url, { headers: headers });
        if (!response.ok) throw new Error('Network response was not ok.');

        let reader = response.body.getReader();
        let decoder = new TextDecoder();
        let result = '';

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            result += decoder.decode(value, {stream: true});
        }

        input.value = result;
        submit.disabled = false; // Enable the button if data is fetched successfully
    } catch (error) {
        console.error('Failed to fetch:', error);
        alert('Failed to fetch data: ' + error.message);
    }
}

fetchButton.onclick = () => {
    fetchData();
}

/**
 * Main function to run LLM Inference.
 */
async function runDemo() {
  const genaiFileset = await FilesetResolver.forGenAiTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-genai/wasm');
  let llmInference;

  submit.onclick = () => {
    output.textContent = '';
    submit.disabled = true;
    llmInference.generateResponse(input.value, displayPartialResults);
  };

  submit.value = 'Loading the model...'
  LlmInference
      .createFromOptions(genaiFileset, {
        baseOptions: {modelAssetPath: modelFileName},
        maxTokens: 2000,

      })
      .then(llm => {
        llmInference = llm;
        submit.disabled = false;
        submit.value = 'Get Response'
      })
      .catch(() => {
        alert('Failed to initialize the task.');
      });
}

runDemo();
