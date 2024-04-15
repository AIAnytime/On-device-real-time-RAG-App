# On-device-real-time-RAG-App

Welcome, a powerful demonstration of real-time, on-device large language model (LLM) inference capabilities. This application fetches text data from specified URLs, processes it through an LLM, and displays inference results directly on your browser, all without the need for server-side processing.

## Features

- **Data Fetching**: Users can fetch text data from any URL which the LLM will then use as input.
- **LLM Inference**: The app performs inference using MediaPipe's LLM tasks, generating responses based on the fetched data.
- **Responsive UI**: Utilizes Bootstrap for a responsive user interface that is functional and easy to navigate on both desktop and mobile devices.

## Prerequisites

To run this application, you need a modern web browser that supports WebGPU, JavaScript ES6 modules and the Fetch API. The application has been tested on the latest versions of Chrome.

## Installation

No installation is necessary. Follow these steps to get started:

1. **Clone the Repository**: If available on GitHub, clone the repository using the following command:

    ```bash
    git clone https://github.com/AIAnytime/On-device-real-time-RAG-App
    ```

    If not using Git, simply download the source files directly from your source management tool.

2. **Open the Application**: Open the `index.html` file in a web browser to launch the application (Use Live Server in VS Code).

## Usage

1. **Enter a URL**: Type the URL you want to fetch text from in the "URL to Fetch" input field.
2. **Fetch Data**: Click on the "Fetch Data" button to retrieve data from the URL. The fetched data will appear in the "Input" textarea.
3. **Generate Response**: With data in the "Input" textarea, click "Get Response" to start the inference process. The generated response will be displayed in the "Result" textarea.

## Components

- **index.html**: Main HTML file containing the application structure and links to external stylesheets and scripts.
- **index.js**: JavaScript file that includes functions for fetching data, running LLM inference, and updating the UI.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository (if hosted on a platform like GitHub).
2. Make your changes and test them.
3. Submit a pull request detailing the changes made.

## License

This project is open-sourced under the Apache 2.0 License. See the LICENSE file for more details (you will need to include this file in your repository).


