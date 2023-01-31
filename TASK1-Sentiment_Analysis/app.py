import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from flask import Flask ,render_template,request

tsv_file='Restaurant_Reviews.tsv'

df=pd.read_table(tsv_file,sep='\t')
 
# converting tsv file into csv
df.to_csv('Restaurant_Reviews.csv',index=False)

X = df['Review']
y = df['Liked']

vectorizer = CountVectorizer()

X = vectorizer.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression()

model.fit(X_train, y_train)

app=Flask(__name__)

@app.route("/")
def f1():
    return render_template("index.html")

@app.route("/predict")
def f2():
    return render_template("predict.html")

@app.route("/index")
def f3():
    return render_template("index.html")

@app.route("/submit", methods=['GET','POST'])
def submit():

    input_data=(request.form.get('sentiment'))
    input_data = [input_data]
    prediction = model.predict(vectorizer.transform(input_data))
    if(prediction[0]==1):
        emoji = "😄"
        return render_template("predict.html", p="Result :- This is a positive emotion " + emoji + " ",sentiment=input_data[0], emoji=emoji)
    else:
        emoji = "☹️"
        return render_template("predict.html", p="Result :- This is a negative emotion " + emoji + " ",sentiment=input_data[0], emoji=emoji)


if __name__=='__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug =True)