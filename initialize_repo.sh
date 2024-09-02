#!/bin/sh -e

ve_dir=.venv

# Check if the virtual environment directory exists
if [ ! -d "$ve_dir" ]; then
    python3 -m venv "$ve_dir"
fi

# Install dependencies
"$ve_dir"/bin/pip install -r requirements.txt
