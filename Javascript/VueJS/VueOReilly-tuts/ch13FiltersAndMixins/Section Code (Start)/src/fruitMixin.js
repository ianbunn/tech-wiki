export const fruitMixin = {
    data() {
        return {
            fruits: ['apple', 'banana', 'mango', 'melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element)=> {
                return element.match(this.filterText)
            })
        }
    },
    created() {
        console.log('Created')
    }
}