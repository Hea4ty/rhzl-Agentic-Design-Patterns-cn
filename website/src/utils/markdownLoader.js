// Load markdown files from the parent directory
export async function loadMarkdown(filename) {
  try {
    const response = await fetch(`/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    const text = await response.text();
    return text;
  } catch (error) {
    console.error('Error loading markdown:', error);
    return null;
  }
}

// Extract Chinese content from marked text
export function extractContent(markdown, lang = 'both') {
  if (lang === 'both') return markdown;
  
  if (lang === 'zh') {
    // Extract Chinese content from <mark> tags
    const lines = markdown.split('\n');
    const chineseLines = [];
    let inMark = false;
    let markContent = '';
    
    for (let line of lines) {
      // Check for <mark> tags
      if (line.includes('<mark>')) {
        const matches = line.match(/<mark>(.*?)<\/mark>/g);
        if (matches) {
          matches.forEach(match => {
            const content = match.replace(/<\/?mark>/g, '');
            chineseLines.push(content);
          });
        }
      }
    }
    
    return chineseLines.join('\n\n');
  }
  
  if (lang === 'en') {
    // Remove <mark> tags and their content
    return markdown.replace(/<mark>.*?<\/mark>/gs, '').replace(/\n{3,}/g, '\n\n');
  }
  
  return markdown;
}

// Get reading progress
export function getReadingProgress(scrollTop, scrollHeight, clientHeight) {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) return 100;
  return Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100));
}
