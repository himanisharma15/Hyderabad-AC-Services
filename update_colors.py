import os, glob

replacements = {
    '#00AEDD': '#154769',
    '#38bdf8': '#154769',
    '#1d5eff': '#154769',
    '#2a6cff': '#154769',
    '0, 174, 221': '21, 71, 105',
    '29, 94, 255': '21, 71, 105'
}

for filepath in glob.glob('/home/navgurukul/Hyderabad-AC-Services/src/components/**/*.css', recursive=True):
    if 'TrustedBrandsSection' in filepath: 
        continue # Skip this to obey 'dont chnage any card' rule
        
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content
    for old, new in replacements.items():
        new_content = new_content.replace(old, new)
        new_content = new_content.replace(old.lower(), new)
        
    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        print(f"Updated {filepath}")
