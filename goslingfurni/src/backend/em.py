# import smtplib
# from email.mime.text import MIMEText
# from email.mime.multipart import MIMEMultipart

# # Sender and recipient email addresses
# sender_email = 'praneswarganesan@gmail.com'
# recipient_email = '727822tucs140@skct.edu.in'

# # Application-specific password
# gmail_password = 'plcp gknd nzli bzdi'  # Your application-specific password

# # Email content
# subject = 'Hi from Praneswar'
# body = 'Hi, this email is a testing verification from goslingfurni. After reading it please ignore it nothing is there it a testing mail '

# # Setup the MIME
# message = MIMEMultipart()
# message['From'] = sender_email
# message['To'] = recipient_email
# message['Subject'] = subject
# message.attach(MIMEText(body, 'plain'))

# # Connect to Gmail's SMTP server
# with smtplib.SMTP('smtp.gmail.com', 587) as server:
#     server.starttls()
#     server.login(sender_email, gmail_password)
#     text = message.as_string()
#     server.sendmail(sender_email, recipient_email, text)
#     print('Email sent successfully!')


import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sys
import json

# Function to read user data from the users.json file
def read_users_from_file():
    try:
        with open('users.json', 'r') as file:
            users = json.load(file)
        return users
    except FileNotFoundError:
        return []

# Function to send email
def send_email(recipient_email):
    # Sender email and application-specific password
    sender_email = 'praneswarganesan@gmail.com'
    gmail_password = 'plcp gknd nzli bzdi'  # Your application-specific password

    # Email content
    subject = 'Hi from Praneswar'
    body = 'Hi, this email is a testing verification from goslingfurni. After reading it please ignore it, nothing is there, it is a testing mail.'

    # Setup the MIME
    message = MIMEMultipart()
    message['From'] = sender_email
    message['To'] = recipient_email
    message['Subject'] = subject
    message.attach(MIMEText(body, 'plain'))

    # Connect to Gmail's SMTP server
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(sender_email, gmail_password)
        text = message.as_string()
        server.sendmail(sender_email, recipient_email, text)
        print('Email sent successfully!')

if __name__ == "__main__":
    # Check if an argument is provided (assumed to be the recipient email)
    if len(sys.argv) != 2:
        print("Usage: python em.py <recipient_email>")
        sys.exit(1)

    recipient_email = sys.argv[1]

    # Check if the provided email exists in the users.json file
    users = read_users_from_file()
    user = next((u for u in users if 'email' in u and u['email'] == recipient_email), None)

    if user:
        send_email(recipient_email)
    else:
        print(f"Error: User with email {recipient_email} not found in users.json")





















