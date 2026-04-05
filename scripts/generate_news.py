import os
import json
import datetime
import re
from openai import OpenAI

# Configuration
REPO_PATH = os.getcwd() # Use current working directory for GitHub Actions
NEWS_PAGE_PATH = os.path.join(REPO_PATH, "src/pages/learning-center/News.tsx")
BLOG_ARTICLE_PATH = os.path.join(REPO_PATH, "src/pages/resources/BlogArticle.tsx")
SITEMAP_FILE = os.path.join(REPO_PATH, "public/sitemap.xml")
LLMS_FILE = os.path.join(REPO_PATH, "public/llms.txt")

client = OpenAI()

def get_latest_news():
    prompt = """
    Research and provide a summary of a major news event in the AI Voice Agent or AI Receptionist space that would have happened around April 1-5, 2026. 
    Focus on something timely like a new model release, a major industry report, or a new feature from a major player.
    
    CRITICAL: You MUST only provide REAL, VERIFIABLE URLs that actually exist. 
    DO NOT hallucinate or 'predict' what a URL might look like.
    If you cannot find a direct link to a specific article, link to the main newsroom or relevant category page of the source (e.g., 'https://techcrunch.com/category/artificial-intelligence/').
    
    Return the result as a JSON object with:
    - title: A catchy headline
    - source_summary: A 2-3 sentence summary of the news
    - category: One of [Voice Insights, Industry Trends, Tech Updates]
    - sources: A list of 2-3 REAL source URLs.
    """
    
    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )
    return json.loads(response.choices[0].message.content)

def write_article(news_data):
    prompt = f"""
    Write a news article based on this news: {json.dumps(news_data)}
    
    Requirements:
    1. Tone: Informative, professional, but accessible (8th-grade reading level).
    2. Style: Natural, human-like, NOT appearing to be written by AI.
    3. Structure: 
       - Catchy headline
       - Short excerpt (1-2 sentences)
       - 4-6 paragraphs of content
       - Use Markdown for subheadings (##)
    4. Context: The article is for 'BrightLaunchIQ', a company providing AI receptionists for small businesses.
    5. Length: 400-600 words.
    6. Keywords: Include 5-6 relevant SEO keywords.
    
    Return as a JSON object:
    {{
        "title": "...",
        "excerpt": "...",
        "content": ["paragraph 1", "paragraph 2", ...],
        "keywords": "keyword1, keyword2, ...",
        "readTime": "X min read",
        "references": ["Source Name: https://example.com", "Source Name: https://example.com"]
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
    today_iso = datetime.datetime.now().strftime("%Y-%m-%d")
    
    # 1. Update News.tsx
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
    updated_news = content.replace("const weeklyArticles = [", f"const weeklyArticles = [\n{new_entry}")
    with open(NEWS_PAGE_PATH, 'w') as f:
        f.write(updated_news)
    
    # 2. Update BlogArticle.tsx
    with open(BLOG_ARTICLE_PATH, 'r') as f:
        content = f.read()
    
    new_article_obj = {
        "title": article_data['title'],
        "excerpt": article_data['excerpt'],
        "content": article_data['content'],
        "references": article_data.get('references', []),
        "author": "BrightLaunchIQ",
        "authorRole": "Intelligence Team",
        "authorBio": "",
        "date": date_str,
        "readTime": article_data['readTime'],
        "category": category,
        "keywords": article_data['keywords'],
        "isWeekly": True
    }
    
    insertion_point = content.find("const articles: Record<string, ArticleData> = {")
    opening_brace = content.find("{", insertion_point)
    formatted_entry = f'\n  "{slug}": {json.dumps(new_article_obj, indent=4)},'
    updated_blog = content[:opening_brace+1] + formatted_entry + content[opening_brace+1:]
    
    with open(BLOG_ARTICLE_PATH, 'w') as f:
        f.write(updated_blog)
    
    # 3. Update Sitemap
    with open(SITEMAP_FILE, 'r') as f:
        sitemap_content = f.read()
    sitemap_entry = f"""  <url>
    <loc>https://brightlaunchiq.com/ai-receptionist/news/{slug}</loc>
    <lastmod>{today_iso}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>"""
    if f"/news/{slug}" not in sitemap_content:
        updated_sitemap = sitemap_content.replace("</urlset>", sitemap_entry)
        with open(SITEMAP_FILE, 'w') as f:
            f.write(updated_sitemap)
            
    # 4. Update llms.txt
    with open(LLMS_FILE, 'r') as f:
        llms_lines = f.readlines()
    new_llms_lines = []
    updated_date = False
    added_link = False
    for line in llms_lines:
        if "Last Updated:" in line and not updated_date:
            new_llms_lines.append(f"- Last Updated: {today_iso}\n")
            updated_date = True
        elif "- [News Hub]" in line and not added_link:
            new_llms_lines.append(line)
            new_llms_lines.append(f"  - [{article_data['title']}](https://brightlaunchiq.com/ai-receptionist/news/{slug})\n")
            added_link = True
        else:
            new_llms_lines.append(line)
    with open(LLMS_FILE, 'w') as f:
        f.writelines(new_llms_lines)
        
    return slug

if __name__ == "__main__":
    news = get_latest_news()
    article = write_article(news)
    slug = update_files(article, news['category'])
    if "GITHUB_OUTPUT" in os.environ:
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"article_title={article['title']}\n")
            f.write(f"article_slug={slug}\n")
