from flask import Flask, request, jsonify, redirect

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    response_data = {}

    # Обработка multipart/form-data (для файлов и форм)
    if request.content_type.startswith('multipart/form-data'):
        # Сохраняем данные формы
        response_data['form'] = request.form.to_dict()
        # Сохраняем информацию о файлах
        response_data['files'] = {file.filename: file.content_type for file in request.files.values()}

    # Обработка application/json
    elif request.content_type == 'application/json' or request.is_json:
        response_data['json'] = request.get_json(force=True)  # Используйте force=True, чтобы принудительно парсить как JSON

    # Неподдерживаемый тип содержимого
    else:
        response_data['error'] = 'Unsupported Media Type: The content type is not supported.'

    # Отображаем полученные данные в ответе
    #return jsonify(response_data), 200 if 'error' not in response_data else 415
    redirect_url = 'www.avride.ai/robot/feedback-success'
    return redirect(redirect_url, code=302)


if __name__ == '__main__':
    app.run(port=5000, debug=True)