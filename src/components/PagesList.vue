<template>
    <ul class="list" :class="{ 'first': isFirst }">
        <slot />

        <template v-for="item in items">
            <li :key="item.id" class="list__item" :class="{ 'has-submenu': item.children }">
                <div v-if="item.children" class="list__title">
                    <strong>{{ item.name }}</strong>
                </div>

                <RouterLink v-if="!item.children" :to="{ name: item.name }" class="list__link">
                    {{ item.name }}
                </RouterLink>

                <PagesList v-if="item.children" :items="item.children" :is-first="false">
                    <RouterLink :to="{ name: item.name }" class="list__link">
                        {{ item.name }}
                    </RouterLink>
                </PagesList>
            </li>
        </template>
    </ul>
</template>

<script>
    export default {
        name: 'PagesList',
        props: {
            items: {
                type: Array,
                default: () => []
            },
            isFirst: {
                type: Boolean,
                default: true
            }
        }
    }
</script>

<style lang="scss" scoped>
  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-column-gap: 16px;
    grid-row-gap: 24px;
  }

  .list__title {
    grid-column: 1/-1;
    padding-top: 8px;
    padding-bottom: 24px;
    text-transform: uppercase;
  }

  .list__link {
    text-decoration: none;
    color: #333;
  }

  .list__link:hover {
    color: green;
  }

  .list__item.has-submenu {
    grid-column: 1/-1;
    padding: 24px;
  }

  .list__item.has-submenu .list__item.has-submenu {
    padding: 0;
  }

  .list__item.has-submenu .list__item.has-submenu .list__title {
    font-size: 14px;
    padding-top: 32px;
    border-top: 1px solid #e3e2e2;
    margin-top: 16px;
  }

  .list.first > .list__item {
    background-color: #fff;
    padding: 16px;
  }

  .list.first > .list__item.has-submenu {
    padding: 24px;
  }

  .first > .has-submenu {
    background-color: #fff;
    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    transition: all 0.3s;
  }

  .first > .has-submenu:hover {
    border-color: green;
  }
</style>
