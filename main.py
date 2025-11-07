from flask import Flask, render_template, request
app = Flask('test')
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
    tel = request.form['tel']
    datetime = request.form['datetime']
    print(name, tel, datetime)
    return render_template('index.html')

app.run(debug=True)