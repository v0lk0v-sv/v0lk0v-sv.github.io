from flask import Flask, request, jsonify, redirect
import logging
from logging.handlers import RotatingFileHandler
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

app = Flask(__name__)

smtp_username = 'AKIATFG5RERESIDLU4X3'
smtp_password = 'BGKgQrJlS98B9AOWL1JSDOQpziUAaFAyUO/gr2xnYrrr'
smtp_server = 'email-smtp.eu-north-1.amazonaws.com'
smtp_port = 587

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('webhookLogger')
handler = RotatingFileHandler('webhook.log', maxBytes=10000, backupCount=3)
logger.addHandler(handler)

def send_email_smtp(sender, recipient, subject, body, smtp_username, smtp_password, smtp_server, smtp_port, files=[]):
    try:
        # Создание сообщения
        msg = MIMEMultipart()
        msg['From'] = sender
        msg['To'] = recipient
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        for file in files:
            if file.filename:
                file_content = file.read()
                file.seek(0)
                part = MIMEBase('application', "octet-stream")
                part.set_payload(file_content)
                encoders.encode_base64(part)
                part.add_header('Content-Disposition', f'attachment; filename="{file.filename}"')
                msg.attach(part)


        # Подключение к SMTP серверу
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)

        # Отправка письма
        server.send_message(msg)
        server.quit()

        logger.info("Email sent successfully.")
    except Exception as e:
        logger.error(f"Failed to send email: {e}")
        raise

@app.route('/webhook', methods=['POST'])
def webhook():
    response_data = {}
    files = request.files.getlist('files[]')

    # Логирование типа содержимого запроса
    logger.info(f"Received request with content type: {request.content_type}")

    # Обработка multipart/form-data (для файлов и форм)
    if request.content_type.startswith('multipart/form-data'):
        files = request.files.getlist('files[]')
        logger.info(f"Number of files received: {len(files)}")
        response_data['files'] = {}

        for file in files:
            response_data['files'][file.filename] = file.content_type
            logger.info(f"File received - Name: {file.filename}, Type: {file.content_type}")


        # Сохраняем данные формы
        response_data['form'] = request.form.to_dict()
        logger.info(f"Form data: {response_data['form']}")

        # Сохраняем информацию о файлах
        # response_data['files'] = {file.filename: file.content_type for file in request.files.values()}
        # logger.info(f"Form data: {response_data['form']}")
        # logger.info(f"Files: {response_data['json']}")

    # Обработка application/json
    elif request.content_type == 'application/json' or request.is_json:
        response_data['json'] = request.get_json(force=True)  # Используйте force=True, чтобы принудительно парсить как JSON
        logger.info(f"JSON data: {response_data['json']}")

    # Неподдерживаемый тип содержимого
    else:
        response_data['error'] = 'Unsupported Media Type: The content type is not supported.'
        logger.error(f"Error: {response_data['error']}")

    # Отображаем полученные данные в ответе
    # return jsonify(response_data), 200 if 'error' not in response_data else 415
    # redirect_url = 'https://www.avride.ai/robot/feedback-success'
    # return redirect(redirect_url, code=302)

    # Формирование содержимого письма
    email_subject = "Avride robot feedback received"
    email_body = "Received data:\n"
    if 'form' in response_data:
        form_data = response_data['form']
        email_body += f"Name: {form_data.get('name', '')}\n"
        email_body += f"Email: {form_data.get('email', '')}\n"
        email_body += f"Message: {form_data.get('message', '')}\n"
        # email_body += f"Form data: {response_data['form']}\n"
    # if 'files' in response_data:
        # email_body += f"Files: {', '.join(response_data['files'].keys())}"
    if files:
        email_body += "Files:\n"
        for file in files:
            email_body += f"{file.filename}\n"
    # Отправка письма
    try:
        send_email_smtp(
                sender='volkov.sergey.job@gmail.com',
                recipient='volkov.sergey.job@gmail.com',
                subject=email_subject,
                body=email_body,
                smtp_username=smtp_username,
                smtp_password=smtp_password,
                smtp_server=smtp_server,
                smtp_port=smtp_port,
                files=files
        )
        logger.info("Email sent successfully.")
    except Exception as e:
        logger.error(f"Failed to send email: {e}")

    # Отображаем полученные данные в ответе
    # return jsonify(response_data), 200 if 'error' not in response_data else 415
    base_url = request.url_root
    # redirect_url = base_url.rstrip('/') + '/robot/feedback-success'
    redirect_url = 'https://www.avride-new.webflow.io/robot/feedback-success'
    return redirect(redirect_url, code=302)


if __name__ == '__main__':
    app.run(port=5000, debug=True)