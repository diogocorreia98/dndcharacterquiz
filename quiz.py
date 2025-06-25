# -*- coding: utf-8 -*-
"""Questionário em português para definir personagem de D&D."""

QUESTOES = [
    {
        "texto": "1. Qual destas qualidades descreve melhor você?\n(A) Corajoso\n(B) Sábio\n(C) Devoto",
        "opcoes": ["a", "b", "c"],
    },
    {
        "texto": "2. Que ambiente você prefere?\n(A) Campos de batalha\n(B) Bibliotecas\n(C) Templos",
        "opcoes": ["a", "b", "c"],
    },
    {
        "texto": "3. O que você busca em uma aventura?\n(A) Glória\n(B) Conhecimento\n(C) Fé",
        "opcoes": ["a", "b", "c"],
    },
]

MAPEAMENTO = {
    "a": {"especie": "Humano", "classe": "Guerreiro", "antecedente": "Nobre"},
    "b": {"especie": "Elfo", "classe": "Mago", "antecedente": "Sábio"},
    "c": {"especie": "Anão", "classe": "Clérigo", "antecedente": "Acolito"},
}


def perguntar():
    contagem = {"a": 0, "b": 0, "c": 0}
    for q in QUESTOES:
        resposta = input_validada(q["texto"], q["opcoes"])
        contagem[resposta] += 1
    return contagem


def input_validada(texto, opcoes):
    opcoes_str = "/".join(letra.upper() for letra in opcoes)
    while True:
        resposta = input(f"{texto}\nDigite {opcoes_str}: ").strip().lower()
        if resposta in opcoes:
            return resposta
        print("Resposta inválida. Tente novamente.")


def determinar_resultado(contagem):
    letra = max(contagem, key=contagem.get)
    return MAPEAMENTO[letra]


def main():
    print("Bem-vindo ao questionário de D&D! Responda com A, B ou C.\n")
    contagem = perguntar()
    resultado = determinar_resultado(contagem)
    print("\nResultado sugerido:")
    print(f"Espécie: {resultado['especie']}")
    print(f"Classe: {resultado['classe']}")
    print(f"Antecedente: {resultado['antecedente']}")


if __name__ == "__main__":
    main()
