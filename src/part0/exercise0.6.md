```mermaid
sequenceDiagram
    participant U as Usuario
    participant B as Navegador (SPA)
    participant S as Servidor

    U->>B: Escribe una nota y hace clic en "Save"
    B->>S: POST /new_note_spa (content, date)
    S-->>B: 201 Created
    B->>S: GET /data.json
    S-->>B: JSON actualizado con todas las notas
    B->>U: Renderiza todas las notas en la página