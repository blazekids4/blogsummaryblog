# Scraping + Chain of Density Prompting for Blog Article Summaries

## Table of Contents

1. [Introduction](#introduction)
2. [Chain of Density Prompting Implementation](#chain-of-density-prompting-implementation)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Deployment](#deployment)

## Introduction

This project is a comprehensive solution for scraping blog articles and generating concise summaries using advanced AI techniques. It consists of a Python backend and a React frontend.

The backend, written in Python, uses web scraping techniques to fetch articles from the Microsoft blog based on a given search query. It then uses the Azure OpenAI API to generate a summary of the fetched articles. The summarization process involves a technique called "Chain of Density Prompting", which ensures the generated summaries are dense with information and relevant to the context.

The frontend, built with React, provides a user-friendly interface to interact with the backend. It fetches the generated summaries from the backend and displays them in a markdown format using the react-markdown library.

This project is perfect for anyone who wants to quickly get the gist of multiple blog articles without having to read through each one in detail. It's also a great example of how AI can be used to automate and enhance the process of content summarization.

## Chain of Density Prompting Implementation

This project uses a technique called "Chain of Density Prompting" for generating concise and information-dense summaries of blog articles. This technique is implemented in the Python backend, specifically in the *chain_of_density_summarization* function in the **cod-article-7days.py** file.

The chunk_content function splits the content of the blog article into 'n' parts, with 'n' defaulting to 5 if not provided. This means that, by default, **the content will be divided into 5 chunks, regardless of the length of the article**. 
    
However, keep in mind that each chunk will be of different sizes if the article is short or very long. In other words, a longer article will result in larger chunks, while a shorter article will result in smaller chunks.



### What is Chain of Density Prompting?

Chain of Density Prompting is a summarization technique that involves generating a series of increasingly dense summaries. The process starts with a long, non-specific summary and then iteratively refines it to make it denser and more informative.

The goal is to create a summary that is concise yet self-contained, meaning it can be easily understood without the need to read the full article. This is achieved by carefully selecting and incorporating relevant entities from the article into the summary.

### Implementation Details

The *chain_of_density_summarization* function takes a list of chunks (parts of the article) and a token count as input. It then generates a series of summaries, each one denser than the last.

For the first summary, the function uses only the first chunk. For subsequent summaries, it fuses the previous summary with the next chunk to create a new, denser summary. This is done using the *fuse_summaries* function.

The *render_density_prompt* function is used to generate the prompts for the OpenAI GPT-35-Turbo (or GPT-4) model. These prompts include the article chunk (or fused content) and, for all but the first summary, the previous summary. The prompts also include an explicit instruction for the model to generate a summary in natural language.

The *summarize_with_gpt* function is used to generate the summaries. It sends the prompts to the OpenAI GPT-35-Turbo (or GPT-4) model and returns the generated summaries.

The *chain_of_density_summarization* function returns the last summary in the series, which is the densest and most informative.

### Usage

To use the Chain of Density Prompting implementation, run the cod-article-7days.py script. This will start a Flask server on port 5000. The server fetches articles from the Microsoft blog based on a given search query, generates summaries using the Chain of Density Prompting technique, and serves the summaries as markdown content.

The frontend, a React application, fetches the markdown content from the backend and displays it. To start the frontend, navigate to the frontend directory and run npm start. The frontend will start on port 3000.

## Installation

This project consists of a Python backend and a React frontend. Here are the steps to get each part set up:

### Backend

1. Ensure you have Python 3.9 or later installed. You can check your Python version by running `python --version` in your terminal.

2. Clone the repository to your local machine.

3. Navigate to the project directory in your terminal.

4. It's recommended to create a virtual environment to keep the project's dependencies isolated. You can do this with the following commands:

    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows, use [`venv\Scripts\activate`]
    ```

5. Install the Python dependencies with pip:

    ```cli
    pip install -r requirements.txt
    ```

### Frontend

1. Ensure you have Node.js and npm installed. You can check your Node.js version by running node --version and your npm version with npm --version.

2. Navigate to the frontend directory in your terminal.

3. Install the JavaScript dependencies with npm:

Now both the backend and frontend should be set up and ready to run.

*This assumes that the requirements.txt file lists the Python dependencies for the backend, and the frontend/package.json file lists the JavaScript dependencies for the frontend.*

## Usage

This project consists of a Python backend and a React frontend. Here's how to use each part:

### Backend Usage

The backend is a Flask application that scrapes articles from the Microsoft blog and generates summaries using Azure's OpenAI. It exposes an endpoint /api/markdown that returns the generated markdown content.

To start the backend server, navigate to the project directory in your terminal and activate the virtual environment:

```cli
source venv/bin/activate  # On Windows, use venv\Scripts\activate
```

Then, start the Flask application:

```cli
python cod-article-7days.py
```

The Flask server will start on port 5000.

### Frontend Usage

The frontend is a React application that displays the markdown content generated by the backend.

To start the frontend, navigate to the frontend directory in your terminal:

```cli
cd frontend
```

Then, start the React application:

```cli
npm start
```

The React application will start on port 3000. Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

The frontend fetches the markdown content from the backend when the page loads and displays it using the MarkdownDisplay component.

## Deployment

This project consists of a Python backend and a React frontend, each of which is containerized using Docker. Here are the steps to deploy each part:

### Backend Deployment

The backend is a Flask application that is containerized using Docker. Here are the steps to build and run the Docker image:

1. Navigate to the project directory in your terminal.

2. Build the Docker image:

    ```sh
    docker build -t blog-sum-blog-backend -f Dockerfile-backend .
    ```

3. Run the Docker container:

    ```sh
    docker run -p 5000:5000 blog-sum-blog-backend
    ```

The Flask server will start on port 5000.

### Frontend Deployment

The frontend is a React application that is also containerized using Docker. Here are the steps to build and run the Docker image:

1. Navigate to the frontend directory in your terminal.

2. Build the Docker image:

    ```sh
    docker build -t blog-sum-blog-frontend -f Dockerfile-frontend .
    ```

3. Run the Docker container:

    ```sh
    docker run -p 3000:3000 blog-sum-blog-frontend
    ```

The React application will start on port 3000. Open http://localhost:3000 to view it in your browser.

### Kubernetes Deployment

The application can also be deployed on a Kubernetes cluster. Here is the command to apply the Kubernetes deployment configuration:

```sh
kubectl apply -f aks-deployment.yaml
```

This will create a deployment named **blog-sum-blog-deployment** in your Kubernetes cluster.

Please note that you need to have Docker and Kubernetes installed and properly configured on your machine to follow these steps.

## Screenshot of Frontend Output

![image](https://github.com/blazekids4/blogsummaryblog/assets/45666337/0c5d945b-dd45-4068-9b0d-b745a64056a3)
