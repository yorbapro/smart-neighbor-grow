import os
import json
import datetime
import re
from openai import OpenAI

# Configuration
REPO_PATH = os.getcwd() # Use current working directory for GitHub Actions
NEWS_PAGE_PATH = os.path.join(REPO_PATH, "src/pages/learning-center/News.tsx")
BLOG_ARTICLE_PATH = os.path.join(REPO_PATH, "src/pages/resources/BlogArticle.tsx")

client = OpenAI()

def get_latest_news():
    """
    In a real scenario, this would fetch from an RSS feed or News API.
    For this demonstration, we'll use a curated prompt to 'research' via the LLM 
    based on the context of April 2026.
    """
    prompt = """
    Research and provide a summary of a major news event in the AI Voice Agent or AI Receptionist space that would have happened around April 1-3, 2026. 
    Focus on something timely like a new model release (e.g., Mistral Voxtral), a major industry report (e.g., 65% of local searches are now voice), or a new feature from a major player (Google, RingCentral, Zoom).
    Return the result as a JSON object with:
    - title: A catchy headline
    - source_summary: A 2-3 sentence summary of the news
    - category: One of [Voice Insights, Industry Trends, Tech Updates]
    """
    
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    return json.loads(response.choices[0].message.content)

def write_article(news_data):
    """
    Writes the full article at an 8th-grade level.
    """
    prompt = f"""
    Write a news article based on this news: {json.dumps(news_data)}
    
    Requirements:
    1. Tone: Informative, professional, but accessible (8th-grade reading level).
    2. Style: Natural, human-like, NOT appearing to be written by AI. Avoid common AI tropes like 'In the ever-evolving landscape'.
    3. Structure: 
       - Catchy headline
       - Short excerpt (1-2 sentences)
       - 4-6 paragraphs of content
       - Use Markdown for subheadings (##)
    4. Context: The article is for 'BrightLaunchIQ', a company providing AI receptionists for small businesses (HVAC, Plumbers, Lawyers, etc.).
    5. Length: 400-600 words.
    6. Keywords: Include 5-6 relevant SEO keywords.
    
    Return as a JSON object:
    {{
        "title": "...",
        "excerpt": "...",
        "content": ["paragraph 1", "paragraph 2", ...],
        "keywords": "keyword1, keyword2, ...",
        "readTime": "X min read"
    }}
    """
    
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    return json.loads(response.choices[0].message.content)

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def update_files(article_data, category):
    slug = slugify(article_data['title'])
    date_str = datetime.datetime.now().strftime("%B %d, %Y")
    
    # 1. Update News.tsx (add to weeklyArticles array)
    with open(NEWS_PAGE_PATH, 'r') as f:
        content = f.read()
    
    new_entry = f"""  {{
    title: "{article_data['title']}",
    slug: "{slug}",
    date: "{date_str}",
    readTime: "{article_data['readTime']}",
    category: "{category}",
    excerpt: "{article_data['excerpt']}",
  }},"""
    
    # Insert after 'const weeklyArticles = ['
    updated_news = content.replace("const weeklyArticles = [", f"const weeklyArticles = [\n{new_entry}")
    
    with open(NEWS_PAGE_PATH, 'w') as f:
        f.write(updated_news)
    
    # 2. Update BlogArticle.tsx (add to articles object)
    with open(BLOG_ARTICLE_PATH, 'r') as f:
        content = f.read()
    
    # Format content array for JS
    js_content_array = json.dumps(article_data['content'], indent=6)
    
    new_article_obj = f"""  "{slug}": {{
    title: "{article_data['title']}",
    excerpt: "{article_data['excerpt']}",
    content: {js_content_array},
    author: "BrightLaunchIQ",
    authorRole: "Intelligence Team",
    authorBio: "",
    date: "{date_str}",
    readTime: "{article_data['readTime']}",
    category: "{category}",
    keywords: "{article_data['keywords']}",
    isWeekly: true,
  }},"""
    
    # Insert before the closing '};' of the articles object
    # We look for the last entry "isWeekly: true," and insert after it
    updated_blog = content.replace('isWeekly: true,\n  },', f'isWeekly: true,\n  }},\n{new_article_obj}')
    
    with open(BLOG_ARTICLE_PATH, 'w') as f:
        f.write(updated_blog)
    
    return slug

if __name__ == "__main__":
    print("Fetching latest news...")
    news = get_latest_news()
    print(f"Found news: {news['title']}")
    
    print("Writing article...")
    article = write_article(news)
    
    print("Updating website files...")
    slug = update_files(article, news['category'])
    print(f"Successfully created article: {slug}")
    
    # Output for GitHub Actions
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"article_title={article['title']}\n")
