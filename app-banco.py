import sqlite3
from flask import Flask, jsonify
from flask_cors import CORS
from requests import JSONDecodeError

def pega_conexao():
    nome_banco = "loja.db"
    con = sqlite3.connect(nome_banco) # conecta ao banco
    return con

# # Aplicação web com Flask
app = Flask(__name__)
CORS(app)

@app.route('/')
def raiz():
    return "resposta do meu backend em python!"

@app.route("/todos")
def todos():
    con = pega_conexao()
    cur = con.cursor()
    
    try:
        cur.execute("SELECT * FROM Produtos")
    except:
        con.close()
        return jsonify("Erro ao consultar o banco")
    
    dados = cur.fetchall()
    con.close()
    return jsonify(dados)

@app.route("/lista/<int:id>") #http://localhost:5000/lista/1
def lista_um(id):
    con = pega_conexao()
    cur = con.cursor()

    try:
        cur.execute(f"SELECT * FROM Produtos WHERE id={id}")
    except:
        con.close()
        return jsonify("Erro ao consultar o banco")

    dados = cur.fetchone()
    con.close()
if __name__ == "__main__":
	app.run()