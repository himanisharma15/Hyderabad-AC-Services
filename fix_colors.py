import re

file_path = "src/pages/AboutPage.module.css"

with open(file_path, "r") as f:
    content = f.read()

# Make the hero background a premium gradient
content = re.sub(r"background: #0284C7;", r"background: linear-gradient(135deg, #0c4a6e 0%, #0284C7 100%);", content)

# Make text elements use darker sky blue for contrast
# We will use #0284C7 for main text blue, #0EA5E9 for accents
# Since we replaced #0F4CE3 with #0EA5E9 everywhere, let's change it strategically.
# For text elements, we want it darker.
# Let's replace all #0EA5E9 with #0284C7 (Sky 600) first to ensure contrast.
content = re.sub(r"#0EA5E9", "#0284C7", content, flags=re.IGNORECASE)

# Now, let's fix some hover states that might have been #0284C7 -> make them #0369A1 (Sky 700)
# Wait, I already had #0284C7 for hover from previous script.
# Let's just do a smart regex replacement based on properties.

