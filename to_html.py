from markdown2 import markdown

with open('README.md', 'r', encoding='utf-8') as file:
    markdown_content = file.read()

with open('cv_output.html', 'w', encoding='utf-8') as html_file:
    html_file.write(markdown(markdown_content))
