import { createI18n } from "vue-i18n";

const messages = {
  en: {
    login: 'User already Logged In',
    verb: {
      close: 'Close',
      login: 'Login',
      logout: 'Logout',
    },
    form: {
      emil: 'Email',
      password: 'Password'
    }
  },
  ur: {
    login: 'صارف لاگ اِن ہے ',
    verb: {
      close: 'خروج',
      login: 'لاگ اِن',
      logout: 'لاگ اوُٹ '
    },
    form: {
      email: 'اِی میل',
      password: ' پاسورڈ '
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ur',
  fallback: 'en',
  messages
})


