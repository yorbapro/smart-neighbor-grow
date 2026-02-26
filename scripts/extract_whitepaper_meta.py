import os
import json
import re

def extract_meta(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title (first # header)
    title_match = re.search(r'^#\s+(.*)$', content, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else os.path.basename(file_path).replace('.md', '').replace('_', ' ')
    
    # Extract executive summary (content between "Executive Summary" and the next header)
    summary_match = re.search(r'##\s+Executive\s+Summary\s+(.*?)(?=\n##|\Z)', content, re.DOTALL | re.IGNORECASE)
    summary = summary_match.group(1).strip() if summary_match else ""
    
    # Clean up summary (remove extra newlines and markdown)
    summary = re.sub(r'\s+', ' ', summary)
    if len(summary) > 250:
        summary = summary[:247] + "..."
        
    # Generate slug from filename
    slug = os.path.basename(file_path).replace('.md', '').lower().replace('_', '-')
    # Remove leading numbers from slug if present (e.g., "1-ai-receptionist" -> "ai-receptionist")
    slug = re.sub(r'^\d+-', '', slug)
    
    return {
        "title": title,
        "summary": summary,
        "slug": slug,
        "fileName": os.path.basename(file_path)
    }

def main():
    whitepapers_dir = "/home/ubuntu/brightlaunchiq/public/whitepapers"
    output_file = "/home/ubuntu/brightlaunchiq/src/pages/resources/whitepaper_metadata.json"
    
    metadata = []
    # Sort files numerically if they start with numbers
    files = sorted([f for f in os.listdir(whitepapers_dir) if f.endswith('.md') and f != 'website_build_prompt.md'], 
                   key=lambda x: int(re.match(r'^\d+', x).group()) if re.match(r'^\d+', x) else 999)
    
    for file_name in files:
        file_path = os.path.join(whitepapers_dir, file_name)
        meta = extract_meta(file_path)
        metadata.append(meta)
    
    os.makedirs(os.path.dirname(output_file), exist_ok=True)
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(metadata, f, indent=2)
    
    print(f"Extracted metadata for {len(metadata)} whitepapers to {output_file}")

if __name__ == "__main__":
    main()
