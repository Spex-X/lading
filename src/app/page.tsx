export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="text-lg font-bold">Brigadeiros Perfeitos</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#conteudo" className="hover:opacity-80">Conteúdo</a>
            <a href="#para-quem" className="hover:opacity-80">Para quem</a>
            <a href="#sabores" className="hover:opacity-80">Sabores</a>
            <a href="#garantia" className="hover:opacity-80">Garantia</a>
          </nav>
          <a href="#comprar" className="rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">Comprar</a>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500" />
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-background/70 px-3 py-1 text-xs font-medium">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500" />
              +70 Receitas • Precificação • Morango do Amor Perfeito
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Está cansada de perder ingredientes tentando acertar o ponto do brigadeiro?
            </h1>
            <p className="mt-3 text-xl md:text-2xl font-extrabold text-rose-600 dark:text-rose-400">
              NÃO ERRE O PONTO NUNCA MAIS!
            </p>
            <ul className="mt-4 space-y-2 text-sm md:text-base">
              {[
                "Aprenda técnicas infalíveis sem desperdícios",
                "Receitas que encantam no visual e no sabor",
                "Aumente sua margem com precificação simples",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-rose-600" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#comprar" className="rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-4 text-sm md:text-base font-extrabold shadow-md shadow-red-600/30">
                Quero aprender agora!
              </a>
              <a href="#conteudo" className="rounded-lg border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5">
                Ver o que tem dentro
              </a>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs opacity-80">
              <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/> Acesso imediato</div>
              <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"/> Atualizações grátis</div>
              <div className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-500"/> Garantia 7 dias</div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 dark:border-white/10 p-6 md:p-8 bg-background/70">
            <div className="grid grid-cols-2 gap-5 text-center">
              <div>
                <div className="text-3xl font-extrabold">+70</div>
                <div className="text-xs opacity-70">Receitas</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">0</div>
                <div className="text-xs opacity-70">Desperdício</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">7 dias</div>
                <div className="text-xs opacity-70">Garantia</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">100%</div>
                <div className="text-xs opacity-70">Passo a passo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <section id="conteudo" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">O que você vai receber</h2>
            <ul className="mt-4 space-y-3 text-sm md:text-base">
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600"/> <span><strong>Mais de 70 receitas</strong> de brigadeiros</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600"/> <span><strong>Precificação</strong> para vender com lucro</span></li>
              <li className="flex items-start gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-blue-600"/> <span><strong>Melhor receita</strong> do <strong>Morango do Amor</strong> perfeito</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-background/60">
            <p className="text-sm opacity-80">Domine o ponto do brigadeiro de maneira simples, sem desperdícios, com técnicas e passo a passo claros.</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-center">
              <div><div className="text-2xl font-bold">+70</div><div className="text-xs opacity-70">Receitas</div></div>
              <div><div className="text-2xl font-bold">7 dias</div><div className="text-xs opacity-70">Garantia</div></div>
              <div><div className="text-2xl font-bold">0</div><div className="text-xs opacity-70">Desperdício</div></div>
              <div><div className="text-2xl font-bold">100%</div><div className="text-xs opacity-70">Passo a passo</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Preço */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20" aria-labelledby="preco">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 text-white px-6 py-4 text-center text-sm md:text-base font-extrabold">
            🔥 Preço promocional só até hoje! • ⏳ Restam poucas vagas
          </div>
          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 id="preco" className="text-2xl md:text-3xl font-extrabold">E-book Brigadeiros Perfeitos</h3>
              <p className="mt-2 text-sm opacity-80">Receba acesso imediato ao conteúdo completo.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  "✔️ +70 receitas testadas e aprovadas",
                  "💰 Tabela de precificação descomplicada",
                  "🍓 Morango do Amor perfeito passo a passo",
                  "🔄 Atualizações futuras sem custo",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-red-600"/> <span>{i}</span></li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
              <div className="text-sm opacity-70">De</div>
              <div className="text-2xl line-through opacity-60">R$ 97,00</div>
              <div className="mt-1 text-sm opacity-70">Por</div>
              <div className="text-4xl md:text-5xl font-extrabold text-red-600">R$ 47,00</div>
              <div className="mt-2 text-xs opacity-70">ou 6x no cartão (defina conforme sua plataforma)</div>
              <a href="#" className="mt-6 block text-center rounded-xl bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm md:text-base font-extrabold">Garantir meu e-book</a>
              <div className="mt-4 flex items-center justify-center gap-3 text-xs opacity-80">
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-yellow-400"/>Garantia 7 dias</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-green-500"/>Pagamento seguro</span>
                <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-blue-500"/>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section id="para-quem" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Esse E-book é pra você que quer:</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            "Fazer brigadeiros inovadores que vão surpreender seus clientes!",
            "Entregar produtos de qualidade, que façam as pessoas comer com os olhos e se apaixonar pelo sabor!",
            "Aumentar seus lucros, fugindo do óbvio e tendo criatividade como um grande diferencial!",
            "Fazer o Morango do Amor inesquecível e fidelizar seus clientes.",
          ].map((t) => (
            <div key={t} className="rounded-xl border border-black/10 dark:border-white/10 p-5 text-sm md:text-base">
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Quem comprou, aprovou</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { nome: "Carla M.", texto: "Finalmente acertei o ponto SEM perder ingredientes. Meus clientes notaram a diferença!", estrelas: 5 },
            { nome: "Bruno A.", texto: "A precificação salvou meu lucro. Paguei o e-book no primeiro fim de semana.", estrelas: 5 },
            { nome: "Luana S.", texto: "O Morango do Amor ficou perfeito! Vendi tudo no mesmo dia.", estrelas: 5 },
          ].map((d) => (
            <div key={d.nome} className="rounded-xl border border-black/10 dark:border-white/10 p-5 bg-background/60">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-700 dark:text-rose-300 text-xs font-bold">
                  {d.nome.split(' ')[0][0]}
                </div>
                <div className="text-yellow-500 text-sm">{"★★★★★".slice(0, d.estrelas)}</div>
              </div>
              <p className="mt-3 text-sm">“{d.texto}”</p>
              <div className="mt-2 text-xs opacity-70">— {d.nome}</div>
            </div>
          ))}
        </div>
        {/* Dica: substitua por prints reais de WhatsApp/Instagram quando tiver */}
      </section>

      {/* Sabores */}
      <section id="sabores" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Alguns sabores que você vai aprender</h2>
        <p className="mt-2 text-sm opacity-80">Tradicionais, Frutas Vermelhas, Licor 43, Camafeu, Cheesecake, Morango do Amor e muito mais!</p>
        
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          {[
            "Tradicional",
            "Frutas Vermelhas",
            "Licor 43",
            "Camafeu",
            "Cheesecake",
            "Morango do Amor",
          ].map((s) => (
            <span key={s} className="rounded-full border border-black/10 dark:border-white/10 px-3 py-2 text-center">{s}</span>
          ))}
        </div>
      </section>

      {/* Prova social */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-background/60">
          <p className="text-sm md:text-base">
            Os brigadeiros diferentes fazem tanto sucesso, que um deles foi parar até na Globo!
            Essa receita chamou a atenção da <strong>Ana Maria Braga</strong> e ela reproduziu ao vivo em seu programa.
          </p>
        </div>
      </section>

      {/* Garantia */}
      <section id="garantia" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold">Garantia incondicional de 7 dias</h2>
        <p className="mt-3 text-sm md:text-base opacity-80">
          Compre com tranquilidade. Se o conteúdo não for para você, solicite o reembolso em até 7 dias, conforme previsto em lei.
        </p>
      </section>

      {/* CTA */}
      <section id="comprar" className="bg-black/5 dark:bg-white/5">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Garanta seu E-book agora</h3>
          <p className="mt-2 text-sm md:text-base opacity-80">
            Acesse imediatamente e nunca mais erre o ponto do brigadeiro.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-block rounded-xl bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-sm md:text-base font-extrabold shadow-md shadow-red-600/30"
            >
              Garantir meu e-book agora
            </a>
          </div>
          <div className="mt-3 text-xs text-amber-600 dark:text-amber-400 font-semibold">⏳ Oferta termina hoje — não perca!</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="opacity-70">© {new Date().getFullYear()} Brigadeiros Perfeitos</span>
          <div className="flex items-center gap-4 opacity-80">
            <a href="#conteudo">Conteúdo</a>
            <a href="#para-quem">Para quem</a>
            <a href="#sabores">Sabores</a>
            <a href="#garantia">Garantia</a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 sm:hidden">
        <div className="mx-3 mb-3 rounded-full bg-rose-600 text-white text-center text-sm font-semibold shadow-lg">
          <a href="#comprar" className="block px-5 py-3">Comprar agora — acesso imediato</a>
        </div>
      </div>
    </div>
  );
}
