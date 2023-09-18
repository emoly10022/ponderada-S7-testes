import requests

    # Definir a URL para cadastro de iniciativa
url = "http://localhost:8080/initiative"

    # Definir os detalhes da nova iniciativa
payload = {
    "initiativeName": "Nova Iniciativa",
    "scope": "Descrição da nova iniciativa",
    "module": "Módulo da nova iniciativa",
    "partnerId": "cbc810d9-31d1-4e9f-9cf1-bffbb8956ca",
    "moduleId": "ebba981a-c4b7-482f-9d14-aef8b7ead9a7",
    "courseId": "32797b25-f322-4329-b5b7-011c196ee26d"
}

    # Enviar a solicitação de cadastro de iniciativa
response = requests.post(url, json=payload)

    # Verificar o código de resposta
if response.status_code == 201:
  print("Iniciativa salva com sucesso!")

else:
    print("Erro ao criar Iniciativa!")
    print(response.status_code)
    print(response.json())
    
    