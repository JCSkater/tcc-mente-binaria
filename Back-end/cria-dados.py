import sqlite3

nome_banco = "loja.db"
con = sqlite3.connect(nome_banco)
cur = con.cursor()

Produtos = [
    (None, 'Bicicleta Shimano', 600.43),
    (None, 'Bola de Futebol Wilson', 200.99),
    (None, 'Manga Attack on Titans', 20.43)
]

cur.executemany("INSERT INTO Produtos VALUES (?, ?, ?)", Produtos)

con.commit()
con.close()