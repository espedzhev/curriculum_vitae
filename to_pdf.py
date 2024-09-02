from markdown2 import markdown
from weasyprint import HTML

with open('README.md', 'r', encoding='utf-8') as file:
    markdown_content = file.read()

HTML(string=markdown(markdown_content)).write_pdf('evald_spedzhev_cv_2024.pdf')
