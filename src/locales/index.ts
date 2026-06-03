import { createI18n } from 'vue-i18n'
import zh from './zh'
import en from './en'

const i18n = createI18n({
    legacy: false, // Vue3 必须关闭 legacy
    locale: 'zh', // 默认语言
    messages: {
        zh,
        en,
    },
})

export default i18n