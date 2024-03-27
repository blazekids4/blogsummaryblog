import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

export default function MarkdownDisplay() {
  const [markdown, setMarkdown] = useState('');
  const [lastUpdated,] = useState(Date.now());

  useEffect(() => {
    axios.get('http://localhost:5000/api/markdown')
      .then(response => {
        console.log('Fetched markdown:', response.data.markdown);
        setMarkdown(response.data.markdown);
      })
      .catch(error => {
        console.error('Error fetching markdown:', error);
      });
  }, [lastUpdated]); // Re-fetch markdown when lastUpdated changes

  return <div className="react-markdown"><ReactMarkdown>{markdown}</ReactMarkdown></div>;
}
