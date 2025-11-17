from flask import Flask, render_template, request, flash
import re
app = Flask('test')
app.secret_key = '12345678'
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/news')
def news():
    return render_template('news.html')

@app.route('/rent')
def rent():
    return render_template('rent.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/favorite')
def favorite():
    return render_template('favorite.html')

@app.route('/feedback', methods=['POST'])
def feedback():
    name = request.form['name']
    if len(name) < 5 or not re.match(r'^[A-Za-zА-Яа-яЁё]{2,}(?:\s+[A-Za-zА-Яа-яЁё]{2,})+$', name):
        flash('Введите корректные фамилию и имя')
        return render_template('favorite.html')
    tel = request.form['tel']
    if len(tel) < 11 or len(tel) > 12 or not re.match(r'^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$', tel):
        flash('Введите корректный телефон')
        return render_template('favorite.html')
    datetime = request.form['datetime']
    if not re.match(r'^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})$', datetime):
        flash('Введите корректное время')
        return render_template('favorite.html')
    print(name, tel, datetime)
    return render_template('index.html')

app.run(debug=True)