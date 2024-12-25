const { createApp } = Vue

createApp({
    data() {
        return {
            isScrolled: false,
            isNavVisible: true,
            lastScrollPosition: 0,
            mobileMenuOpen: false,
            welcomeMessage: 'Bienvenue chez La Bella Pizza',
            selectedCategory: 'Pizzas Classiques',
            categories: ['Pizzas Classiques', 'Pizzas Gourmet', 'Spécialités', 'Desserts'],
            menu: [
                {
                    id: 1,
                    category: 'Pizzas Classiques',
                    name: 'Margherita',
                    ingredients: 'Sauce tomate, mozzarella, basilic frais',
                    price: 12,
                    image: 'images/margharita.jpg'
                },
                {
                    id: 2,
                    category: 'Pizzas Classiques',
                    name: 'Regina',
                    ingredients: 'Sauce tomate, mozzarella, jambon, champignons',
                    price: 14,
                    image: 'images/regina.jpg'
                },
                {
                    id: 3,
                    category: 'Pizzas Gourmet',
                    name: 'Truffe Noire',
                    ingredients: 'Crème de truffe, mozzarella di bufala, roquette, copeaux de parmesan',
                    price: 22,
                    image: 'images/truffe-noire.jpg.webp'
                },
                {
                    id: 4,
                    category: 'Pizzas Gourmet',
                    name: 'Burrata',
                    ingredients: 'Sauce tomate, burrata entière, tomates cerises, basilic',
                    price: 19,
                    image: 'images/buratta.jpg'
                },
                {
                    id: 5,
                    category: 'Spécialités',
                    name: 'Calzone',
                    ingredients: 'Sauce tomate, mozzarella, jambon, œuf, champignons',
                    price: 16,
                    image: 'images/calzone.jpg'
                },
                {
                    id: 6,
                    category: 'Desserts',
                    name: 'Tiramisu Maison',
                    ingredients: 'Mascarpone, café, cacao, biscuits',
                    price: 7,
                    image: 'images/tiramisu.jpg'
                }
            ],
            aboutText: 'Depuis 1985, La Bella Pizza perpétue la tradition de la véritable pizza napolitaine. Notre pâte, préparée quotidiennement et laissée à maturer pendant 72 heures, est garnie des meilleurs produits importés directement d\'Italie. Notre four à bois, construit par des artisans napolitains, nous permet de cuire nos pizzas à la perfection à 400°C, leur donnant ce goût unique et authentique qui fait notre renommée.',
            openingHours: {
                'Lundi': 'Fermé',
                'Mardi - Jeudi': '11h30 - 14h30, 18h30 - 22h30',
                'Vendredi - Samedi': '11h30 - 14h30, 18h30 - 23h30',
                'Dimanche': '18h30 - 22h30'
            }
        }
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        },
        filteredMenu() {
            return this.menu.filter(item => item.category === this.selectedCategory)
        }
    },
    methods: {
        handleScroll() {
            const currentScrollPosition = window.scrollY
            this.isScrolled = currentScrollPosition > 50
            
            // Determine scroll direction and toggle nav visibility
            if (currentScrollPosition < 0) {
                return
            }
            
            // Show/hide navbar based on scroll direction
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
                return
            }
            
            this.isNavVisible = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        },
        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId)
            const offset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            })
            
            this.mobileMenuOpen = false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}).mount('#app')
