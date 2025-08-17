# Imagens da Landing Page

Coloque aqui as imagens usadas no projeto (capas, prints de depoimentos, etc.).

Como usar nas páginas (Next.js):
- Caminho público: `/images/nome-do-arquivo.jpg`
- Exemplo:
  ```tsx
  import Image from 'next/image'

  export default function Exemplo() {
    return (
      <Image src="/images/capa-ebook.jpg" alt="Capa do E-book" width={1200} height={800} />
    )
  }
  ```

Sugestões de nomes:
- `capa-ebook.jpg`
- `print-depoimento-1.png`
- `print-depoimento-2.png`
- `brigadeiro-hero.jpg`
