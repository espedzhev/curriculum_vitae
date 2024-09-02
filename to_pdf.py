from markdown2 import markdown
from weasyprint import HTML

with open('README.md', 'r', encoding='utf-8') as file:
    markdown_content = file.read()

# Convert Markdown to HTML
html_content = markdown(markdown_content)
pdf_file_path = 'evald_spedzhev_cv_2024.pdf'

# Generate PDF from HTML
pdf_file_path = 'evald_spedzhev_cv_2024.pdf'
HTML(string=html_content).write_pdf(pdf_file_path)
