# ponderada-S7-testes

## Caso de Teste: Cadastro de uma Nova Iniciativa

### Objetivo:

Verificar se um usuário pode cadastrar uma nova iniciativa no sistema com sucesso.

### Pré-condição:

O usuário está autenticado no sistema e tem permissão para cadastrar iniciativas.

### Procedimento de Teste:

- Enviar uma solicitação de cadastro de iniciativa com os detalhes da iniciativa, como título, descrição e categoria.
- Verificar o código de resposta para garantir que seja bem-sucedido (por exemplo, código 201).
- Recuperar os detalhes da iniciativa cadastrada usando uma solicitação de busca por ID da iniciativa.

### Resultado Esperado:
A solicitação de cadastro de iniciativa deve retornar um código de resposta bem-sucedido (201), e os detalhes da iniciativa devem ser recuperáveis com sucesso.

### Resultado Obtido:
A solicitação de cadastro de iniciativa retornou o código de resposta 201, e os detalhes da iniciativa foram recuperados com sucesso.

### Pós-condição:
Uma nova iniciativa foi cadastrada no sistema e seus detalhes estão disponíveis para consulta.