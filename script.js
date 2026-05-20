const giftData = {
  beleza: [
    {
      title: 'ESPONJA DE MAQUIAGEM WISH EFEITO AIR BRUSH - MICHELLY PALMA',
      description: 'Esponja de maquiagem com efeito air brush para acabamento suave e profissional.',
      price: 'R$ 69,97',
      link: 'https://www.amazon.com.br/dp/B0D6RWTFB2?ref=cm_sw_r_cso_cp_apin_dp_N26MX08BCWDQDHW8F2TS&ref_=cm_sw_r_cso_cp_apin_dp_N26MX08BCWDQDHW8F2TS&social_share=cm_sw_r_cso_cp_apin_dp_N26MX08BCWDQDHW8F2TS',
      image: 'https://m.media-amazon.com/images/I/61jA1fXsivL._AC_SY355_.jpg'
    },
    {
      title: 'Océane-Blush Liquido Nude Rosado - Liquid Blush Lychee Océane Edition 20ml',
      description: 'Blush líquido em tom nude rosado para acabamento natural e elegante.',
      price: 'R$ 54,00',
      link: 'https://www.amazon.com.br/dp/B0FRL2Y84V?ref=cm_sw_r_cso_cp_apin_dp_DCJ8CV5M127CGHGMHG1T&ref_=cm_sw_r_cso_cp_apin_dp_DCJ8CV5M127CGHGMHG1T&social_share=cm_sw_r_cso_cp_apin_dp_DCJ8CV5M127CGHGMHG1T&th=1',
      image: 'https://m.media-amazon.com/images/I/31CjquRmBrL._AC_SY355_.jpg'
    },
    {
      title: 'Damn. vinyl',
      description: 'Kendrick Lamar DAMN. será lançado em vinil em 14 de julho. Cor preta padrão, vinil pesado de 180g.',
      price: 'R$ 330,34',
      link: 'https://www.amazon.com.br/dp/B0716SPKYW?ref=cm_sw_r_cso_cp_apin_dp_S4D4WAANB1GZYP0N80ZP_3&ref_=cm_sw_r_cso_cp_apin_dp_S4D4WAANB1GZYP0N80ZP_3&social_share=cm_sw_r_cso_cp_apin_dp_S4D4WAANB1GZYP0N80ZP_3',
      image: 'https://m.media-amazon.com/images/I/61MWIe1BzwL._AC_SY355_.jpg'
    }
  ],
  moda: [
    {
      title: 'Bolsa estilosa',
      description: 'Acessório premium que combina com looks do dia a dia.',
      price: 'R$ 289,00',
      image: 'https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Cachecol de seda',
      description: 'Toque de elegância e conforto com fibra natural.',
      price: 'R$ 169,90',
      image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Óculos de sol chique',
      description: 'Design moderno com proteção UV para qualquer ocasião.',
      price: 'R$ 199,00',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=800&q=80'
    }
  ],
  'bem-estar': [
    {
      title: 'Conjunto de velas aromáticas',
      description: 'Ambiente relaxante com aromas suaves e delicados.',
      price: 'R$ 89,90',
      image: 'https://images.unsplash.com/photo-1500868651353-1f950c64a4db?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Kit spa em casa',
      description: 'Momentos de autocuidado com itens completos para o bem-estar.',
      price: 'R$ 219,00',
      image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Agenda planner elegante',
      description: 'Organização com estilo para planejar sonhos e metas.',
      price: 'R$ 74,90',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

const giftGrid = document.getElementById('giftGrid');
const menuButtons = document.querySelectorAll('.gift-menu__item');
const template = document.getElementById('gift-card-template');

function hasGiftGrid() {
  return Boolean(giftGrid && template);
}

function renderGifts(category) {
  if (!hasGiftGrid()) return;
  const gifts = giftData[category];
  if (!gifts) return;
  giftGrid.innerHTML = '';

  gifts.forEach((gift) => {
    const node = template.content.cloneNode(true);
    const card = node.querySelector('.gift-card');
    const image = node.querySelector('.gift-card__image');
    const title = node.querySelector('.gift-card__title');
    const description = node.querySelector('.gift-card__description');
    const price = node.querySelector('.gift-card__price');

    image.style.backgroundImage = `url('${gift.image}')`;
    title.textContent = gift.title;
    description.textContent = gift.description;
    price.textContent = gift.price;
    const buyButton = node.querySelector('.gift-card__buy');
    if (gift.link) {
      buyButton.href = gift.link;
      buyButton.textContent = 'Comprar';
      buyButton.style.display = 'inline-flex';
    } else {
      buyButton.style.display = 'none';
    }

    giftGrid.appendChild(card);
  });
}

function updateActiveButton(selectedButton) {
  menuButtons.forEach((button) => button.classList.remove('active'));
  selectedButton.classList.add('active');
}

if (menuButtons.length > 0) {
  menuButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const category = button.dataset.list;
      renderGifts(category);
      updateActiveButton(button);
    });
  });
}

const overlay = document.getElementById('invitationOverlay');
const openInviteBtn = document.getElementById('openInviteBtn');
const confettiContainer = document.getElementById('confettiContainer');

function spawnConfetti(originX, originY) {
  const count = 28;
  for (let i = 0; i < count; i += 1) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const size = 6 + Math.random() * 8;
    const delay = Math.random() * 0.45;
    const rotation = Math.random() * 360;
    const xOffset = (Math.random() - 0.5) * 320;
    const yOffset = (Math.random() - 0.6) * 260;
    const duration = 1.8 + Math.random() * 1.2;

    confetti.style.left = `${originX}px`;
    confetti.style.top = `${originY}px`;
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.setProperty('--x-offset', `${xOffset}px`);
    confetti.style.setProperty('--y-offset', `${yOffset}px`);
    confetti.style.setProperty('--rotation', `${rotation}deg`);
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.animationDuration = `${duration}s`;
    confettiContainer.appendChild(confetti);

    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
}

if (openInviteBtn && overlay && confettiContainer) {
  openInviteBtn.addEventListener('click', (event) => {
    overlay.classList.add('open');
    const originX = event.clientX;
    const originY = event.clientY;
    spawnConfetti(originX, originY);
  });
}

function setupMobileMenu() {
  const toggleButton = document.querySelector('.topnav-toggle');
  const nav = document.querySelector('.topnav');
  const navLinks = document.querySelectorAll('.topnav a');

  if (toggleButton && nav) {
    const toggleMenu = () => {
      const isOpened = nav.classList.toggle('is-open');
      toggleButton.classList.toggle('is-active', isOpened);
      toggleButton.setAttribute('aria-expanded', isOpened);
      document.body.style.overflow = isOpened ? 'hidden' : '';
    };

    toggleButton.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('is-open')) {
          toggleMenu();
        }
      });
    });
  }
}

// --- Lógica de Confirmação de Presença ---
const confirmForm = document.getElementById('confirmForm');
const confirmGrid = document.getElementById('confirmGrid');
const confirmCardTemplate = document.getElementById('confirm-card-template');

const CONFIRM_STORAGE_KEY = 'nicolle_party_confirms';
let confirmData = [];

// 1. CARREGAR OS DADOS (Pronto para o Banco de Dados)
async function carregarConfirmacoes() {
  try {
    // Busca os dados oficiais da planilha via SheetDB (link limpo, sem asteriscos)
    const resposta = await fetch('https://sheetdb.io/api/v1/fjweflsbfgoxb');
    const dados = await resposta.json();
    
    if (Array.isArray(dados)) {
      // Filtra para ignorar as linhas em branco que foram criadas com erro na planilha
      confirmData = dados.filter(item => item.name && item.name.trim() !== '');
    } else {
      console.warn("Erro da API (Verifique a Linha 1 da planilha):", dados);
      confirmData = [];
    }
  } catch (erro) {
    console.warn("Aviso: Não foi possível conectar ao banco de dados. Usando memória local.");
    confirmData = [];
  }

  if (!confirmData || confirmData.length === 0) {
    confirmData = JSON.parse(localStorage.getItem(CONFIRM_STORAGE_KEY)) || [];
  }
  renderConfirms();
}

// 2. SALVAR DADOS (Pronto para o Banco de Dados)
async function salvarConfirmacao(novoConfirmado) {
  confirmData.push(novoConfirmado);

  try {
    // Envia o novo nome para a planilha via SheetDB (link limpo, sem asteriscos)
    await fetch('https://sheetdb.io/api/v1/fjweflsbfgoxb', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [novoConfirmado] })
    });
  } catch (erro) {
    console.warn("Aviso: O nome não foi enviado para a planilha da internet.");
  }

  localStorage.setItem(CONFIRM_STORAGE_KEY, JSON.stringify(confirmData));
  renderConfirms();
}

// Função exclusiva para você (Administrador) remover nomes pelo código
function removerNome(nomeParaRemover) {
  const index = confirmData.findIndex(c => c.name.toLowerCase() === nomeParaRemover.toLowerCase());
  if (index !== -1) {
    confirmData.splice(index, 1);
    localStorage.setItem(CONFIRM_STORAGE_KEY, JSON.stringify(confirmData));
    renderConfirms();
    console.log(`"${nomeParaRemover}" foi removido da lista com sucesso.`);
  } else {
    console.log(`Nome "${nomeParaRemover}" não encontrado na lista.`);
  }
}

// Função exclusiva para você limpar TODOS os nomes da lista de uma vez
function limparLista() {
  confirmData = [];
  localStorage.removeItem(CONFIRM_STORAGE_KEY);
  renderConfirms();
  console.log("Todos os nomes foram apagados com sucesso.");
}

// Atalho secreto de teclado: Pressione Ctrl + Shift + L para limpar a tela magicamente
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && (event.key === 'l' || event.key === 'L')) {
    limparLista();
    alert('🪄 Lista de confirmações apagada com sucesso!');
  }
});

function renderConfirms() {
  if (!confirmGrid || !confirmCardTemplate) return;

  confirmGrid.innerHTML = '';
  const confirms = confirmData.slice().reverse();

  if (confirms.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'mural-empty';
    emptyMessage.textContent = 'Ninguém confirmou presença ainda. Seja o primeiro!';
    confirmGrid.appendChild(emptyMessage);
    return;
  }

  confirms.forEach((confirm) => {
    const node = confirmCardTemplate.content.cloneNode(true);
    const card = node.querySelector('.confirm-item');
    const name = node.querySelector('.confirm-card__name');

    name.textContent = confirm.name;

    confirmGrid.appendChild(card);
  });
}

function setupConfirmForm() {
  if (!confirmForm) return;

  confirmForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('confirmName');
    const name = nameInput.value.trim();

    if (!name) {
      return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Usa a nova função que está preparada para a internet
    salvarConfirmacao({ name, time: formattedDate });

    confirmForm.reset();
  });
}

if (hasGiftGrid()) {
  renderGifts('beleza');
}
setupMobileMenu();
carregarConfirmacoes();
setupConfirmForm();
