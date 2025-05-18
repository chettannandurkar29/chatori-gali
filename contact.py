from flask import Flask, request, jsonify
import pandas as pd
from datetime import datetime
import os

app = Flask(__name__)

# Ensure the data directory exists
if not os.path.exists('data'):
    os.makedirs('data')

EXCEL_FILE = 'data/contact_submissions.xlsx'

@app.route('/submit-form', methods=['POST'])
def submit_form():
    try:
        # Get form data
        data = request.json
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone', '')  # Optional field
        message = data.get('message')
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        
        # Create new entry
        new_entry = {
            'Timestamp': timestamp,
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Message': message
        }
        
        # Convert to DataFrame
        df_new = pd.DataFrame([new_entry])
        
        # Check if file exists
        if os.path.exists(EXCEL_FILE):
            # Read existing data
            df_existing = pd.read_excel(EXCEL_FILE)
            # Combine with new data
            df_combined = pd.concat([df_existing, df_new], ignore_index=True)
        else:
            df_combined = df_new
        
        # Save to Excel
        df_combined.to_excel(EXCEL_FILE, index=False)
        
        return jsonify({'success': True, 'message': 'Form submitted successfully!'})
    
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)