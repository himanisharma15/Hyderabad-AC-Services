import re

file_path = "src/pages/AboutPage.module.css"

with open(file_path, "r") as f:
    content = f.read()

replacements = {
    # Main primary blue to sky blue
    r"#0F4CE3": "#0EA5E9",
    r"#0F4Ce3": "#0EA5E9",
    r"#0f4ce3": "#0EA5E9",
    
    # Primary hover
    r"#0b3bb5": "#0284C7",
    
    # Secondary teal to a lighter sky blue
    r"#2590A6": "#38BDF8",
    r"#2590a6": "#38BDF8",
    
    # Secondary teal hover
    r"#1d7486": "#0EA5E9",
    
    # Hero background dark blue/teal
    r"rgb\(23, 101, 131\)": "#0284C7",
    
    # Light backgrounds
    r"#EFF4FF": "#F0F9FF",
    r"#f0f7f9": "#E0F2FE",
    
    # Borders
    r"#cce0ff": "#BAE6FD",
    
    # Box shadow with rgb
    r"rgba\(15, 76, 227, 0.2\)": "rgba(14, 165, 233, 0.2)",
    r"rgba\(37, 144, 166, 0.4\)": "rgba(56, 189, 248, 0.4)",
}

for old, new in replacements.items():
    content = re.sub(old, new, content, flags=re.IGNORECASE)

with open(file_path, "w") as f:
    f.write(content)

print("Colors updated successfully in AboutPage.module.css")
