# VueJS Animations

## [*Sarah Drasner - Animating Vue How capable and elegant is Vue js in terms of animation*](https://www.youtube.com/watch?v=LLnVLjpY6gE)

### Transition Tag for Components

* Transitions are wrapped with the tag below:
  * `<transition></transition>`

* Some transition modes:
  * `in-out`
  * `out-in`

```js
<transition name="flip" mode="out-in">
    <slot v-if="!isShowing"></slot>
    <img v-else src=""/>
</transition>
```

* CSS animations can also be used
  * Still using `<transition>` component

```js
<transition
    //css class `bouncein` and `rollout`
    enter-active-class="bouncein"
    leave-active-class="rollout">
    <div v-if="isShowing">
        <app-child class="child"></app-child>
    </div>
</transition>
```

* JS animations can also be used
  * JS hooks

```js
<transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @enter-cancelled="enterCancelled"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    @leave-cancelled="leaveCancelled"
    :css="false"
    >
</transition>

<script>
...
    methods: {
        enter(el, done) {
            //entrance animation
            done();
        },
        leave(el, done) {
            //exit animation
            done();
        }
    }
</script>
```

### Transition Group Tag

```js
<transition-group name="cell" tag="div" class="container">
    <div v-for="cell in cells" :key="cell.id">
        {{ cell.number }}
    </div>
</transition-group>
```

### Watchers (Vue's Reactivity System)

***"Leverage the Reactivity System for Transitions"***

Reactive programming is programming w/async data streams.

A stream is a sequence of ongoing events ordered in time that offer some hooks w/which to observe it.

When we use reactive premises for building apps, this means it's very easy to update state in reaction to events.

As the data changes, the watchers will continue updating the front-end in real-time.

```js
<template>
    <input type="number" v-model.number="counter"></input>
</template>

<script>
new Vue({
    el: '#app',
    data () {
        return {
            counter: 0
        }
    },
    watch: {
        counter() {
            console.log('The counter has changed!')
        }
    }
});
</script>
```

### Coordinating Transitions

#### State-driven animation using Vuex

Encapsulate what is changing using Vuex, and use animations to order templates.

```js
export const store = new Vuex.store({
    state: {
        showWeather: false,
        template: 0
    },
    mutations: {
        toggle: state => state.showWeather = !state.showWeather,
        updateTemplate: (state) => {
            state.showWeather = !state.showWeather;
            state.tempalte = (state.template + 1) % 4;
        }
    }
});
```

### Custom Directives

Create your custom directives in VueJS.

```js
<template>
    <p v-tack=>I will now be tacked onto the page</p>
</template>

<script>
...
Vue.directive('tack', {
    bind(el, binding, vnode) {
        el.style.position = 'fixed'
    }
});
</script>
```

### Nuxt Routing & Page Transitions

#### SSR

"By rendering on the server, you can cache the final shape of your data." - Karl Seguin

SSR (Server-side rendering) is great for SEO and less JS to parse for the client.

```sh
# Install vue-cli
npm install -g vue-cli

# Create project
vue init nuxt/starter my-project
cd my-roject
yarn

# Run project
npm run dev
```

NuxtJS offers transition JS hooks out-of-the-box.

```css
.page-enter-active, .page-leave-active {
    transition: all .25s ease-out;
}
.page-enter, .page-leave-active {
    opacity: 0;
    transform: scale(0.95);
    transform-origin: 50% 50%;
}
```

[Back home](../../README.md)
