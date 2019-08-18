var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '/Users/matthewsmith/Documents/workspace/website/vmSocks-green-onWhite.jpg',
        inventory: true,
        details: ['80% cotton', '20% polyester','Gender-neutral'],
        variants: [ 
            {
                variantId: 2234,
                variantColour: "green",
                variantImage: '/Users/matthewsmith/Documents/workspace/website/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColour: "blue",
                variantImage: '/Users/matthewsmith/Documents/workspace/website/vmSocks-blue-onWhite.jpg'
            }
        ],
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1
        },
        updateProduct: function (variantImage){
            this.image = variantImage
        },

    }
})