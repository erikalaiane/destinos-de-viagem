const destinations = [
    {
        name: 'Santorini',
        country: 'Grécia',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        thumb: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=200',
        climate: '25°C Mediterrâneo',
        bestTime: 'Abril - Outubro',
        activities: 'Praias, Pôr do Sol',
        duration: '5-7 dias',
        description: 'Santorini é uma ilha vulcânica no Mar Egeu, famosa por suas casas brancas com cúpulas azuis, praias únicas e pores do sol deslumbrantes. Um destino romântico e inesquecível.',
        highlights: [
            { img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400', label: 'Oia Village' },
            { img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400', label: 'Praias' },
            { img: 'https://images.unsplash.com/photo-1601581987809-a874a81309c9?w=400', label: 'Vinícolas' }
        ]
    },
    {
        name: 'Kyoto',
        country: 'Japão',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800',
        thumb: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=200',
        climate: '15°C Temperado',
        bestTime: 'Março - Maio',
        activities: 'Templos, Jardins',
        duration: '4-6 dias',
        description: 'Antiga capital do Japão, Kyoto preserva a essência da cultura japonesa com seus templos milenares, jardins zen e tradicionais casas de gueixas. Uma viagem no tempo e na tradição.',
        highlights: [
            { img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400', label: 'Fushimi Inari' },
            { img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400', label: 'Arashiyama' },
            { img: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400', label: 'Kinkaku-ji' }
        ]
    },
    {
        name: 'Patagônia',
        country: 'Argentina & Chile',
        image: 'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=800',
        thumb: 'https://images.unsplash.com/photo-1531928351158-2f736078e0a1?w=200',
        climate: '10°C Frio',
        bestTime: 'Novembro - Março',
        activities: 'Trekking, Glaciares',
        duration: '10-14 dias',
        description: 'Uma das últimas fronteiras selvagens do planeta, a Patagônia oferece paisagens épicas com glaciares imponentes, montanhas dramáticas e uma vida selvagem única.',
        highlights: [
            { img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=400', label: 'Torres del Paine' },
            { img: 'https://images.unsplash.com/photo-1622656358329-2ae3ff0f2e86?w=400', label: 'Perito Moreno' },
            { img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400', label: 'Fitz Roy' }
        ]
    },
    {
        name: 'Marrakech',
        country: 'Marrocos',
        image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800',
        thumb: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=200',
        climate: '28°C Desértico',
        bestTime: 'Março - Maio',
        activities: 'Souks, Palácios',
        duration: '4-5 dias',
        description: 'Cidade imperial repleta de cores, aromas e tradições milenares. Marrakech encanta com seus mercados vibrantes, palácios deslumbrantes e a hospitalidade calorosa do povo marroquino.',
        highlights: [
            { img: 'https://images.unsplash.com/photo-1516893842880-5d8aada7ac05?w=400', label: 'Medina' },
            { img: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=400', label: 'Jardin Majorelle' },
            { img: 'https://images.unsplash.com/photo-1508706019489-37e4e3954c93?w=400', label: 'Djemaa el Fna' }
        ]
    },
    {
        name: 'Islândia',
        country: 'Norte da Europa',
        image: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800',
        thumb: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=200',
        climate: '5°C Subártico',
        bestTime: 'Junho - Agosto',
        activities: 'Aurora Boreal, Gêiseres',
        duration: '7-10 dias',
        description: 'Terra de gelo e fogo, a Islândia surpreende com suas paisagens surreais, desde vulcões ativos e glaciares monumentais até fontes termais e a mágica aurora boreal.',
        highlights: [
            { img: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=400', label: 'Blue Lagoon' },
            { img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400', label: 'Jökulsárlón' },
            { img: 'https://images.unsplash.com/photo-1520769945061-0a448c463865?w=400', label: 'Aurora Boreal' }
        ]
    }
];

let currentIndex = 0;

function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = destinations.map((dest, i) => `
        <div class="sidebar-item ${i === currentIndex ? 'active' : ''}" onclick="changeDestination(${i})">
            <img src="${dest.thumb}" alt="${dest.name}">
        </div>
    `).join('');
}

function renderContent() {
    const dest = destinations[currentIndex];
    const content = document.getElementById('content');
    content.style.opacity = '0';
    
    setTimeout(() => {
        content.innerHTML = `
            <div class="destination-image">
                <img src="${dest.image}" alt="${dest.name}">
            </div>
            <div class="destination-info">
                <h1 class="destination-title">${dest.name}</h1>
                <p class="destination-subtitle">${dest.country}</p>
                
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Clima</div>
                        <div class="info-value">${dest.climate}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Melhor Época</div>
                        <div class="info-value">${dest.bestTime}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Atividades</div>
                        <div class="info-value">${dest.activities}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Duração</div>
                        <div class="info-value">${dest.duration}</div>
                    </div>
                </div>
                
                <p class="description">${dest.description}</p>
                
                <a href="#" class="cta-button">Planejar Viagem</a>
            </div>
        `;
        content.style.opacity = '1';
    }, 300);
}

function renderGallery() {
    const dest = destinations[currentIndex];
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = dest.highlights.map(h => `
        <div class="gallery-item">
            <img src="${h.img}" alt="${h.label}">
            <div class="gallery-label">${h.label}</div>
        </div>
    `).join('');
}

function changeDestination(index) {
    currentIndex = index;
    renderSidebar();
    renderContent();
    renderGallery();
}

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        currentIndex = (currentIndex + 1) % destinations.length;
        changeDestination(currentIndex);
    } else if (e.key === 'ArrowUp') {
        currentIndex = (currentIndex - 1 + destinations.length) % destinations.length;
        changeDestination(currentIndex);
    }
});

// Inicialização
renderSidebar();
renderContent();
renderGallery();