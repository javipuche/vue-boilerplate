<template>
    <Layout brand="muchoviaje">
        <br><br><br><br><br>

        <div class="c-navigation c-wrapper c-wrapper--l">
            <nav class="c-navigation__nav c-wrapper__inner">
                <ul class="c-navigation__list">
                    <li class="c-navigation__item">
                        <a href="#" class="c-navigation__link">Menu1</a>
                    </li>
                    <li class="c-navigation__item">
                        <a href="#" class="c-navigation__link">Menu2</a>
                    </li>
                    <li class="c-navigation__item">
                        <a href="#" class="c-navigation__link">Menu3</a>
                        <nav class="c-navigation__nav">
                            <ul class="c-navigation__list">
                                <li class="c-navigation__item">
                                    <a href="#" class="c-navigation__link">Menu1</a>
                                    <nav class="c-navigation__nav">
                                        <ul class="c-navigation__list">
                                            <li class="c-navigation__item">
                                                <a href="#" class="c-navigation__link">Menu1</a>
                                            </li>
                                            <li class="c-navigation__item">
                                                <a href="#" class="c-navigation__link">Menu2</a>
                                            </li>
                                            <li class="c-navigation__item">
                                                <a href="#" class="c-navigation__link">Menu3</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </li>
                                <li class="c-navigation__item">
                                    <a href="#" class="c-navigation__link">Menu2</a>
                                </li>
                                <li class="c-navigation__item">
                                    <a href="#" class="c-navigation__link">Menu3</a>
                                </li>
                            </ul>
                        </nav>
                    </li>
                </ul>
            </nav>
        </div>
    </Layout>
</template>

<script>
    import Layout from '@/layouts/Default.vue'

    export default {
        name: 'Home',
        components: {
            Layout
        },
        metaInfo: {
            title: 'Home'
        }
    }
</script>
