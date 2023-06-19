import { createI18n } from "vue-i18n";

const messages = {
  en: {
    login: 'User already Logged In',
    verb: {
      close: 'Close',
      login: 'Login',
      logout: 'Logout',
      language: 'Language',
      addNew: 'New Person',
      edit: 'Edit',
      save: 'Save'
    },
    form: {
      email: 'Email',
      gender: 'Gender',
      password: 'Password',
      title: 'Title',
      firstName: 'First Name',
      lastName: 'Last Name',
      desc: 'Description',
      visible: 'Visible',
      order: 'Order'
    }
  },
  ar: {
    login: 'صارف لاگ اِن ہے ',
    verb: {
      close: 'خروج',
      login: 'لاگ اِن',
      logout: 'لاگ اوُٹ ',
      language: 'زبان',
      addNew: 'نئی اندراج',
      edit: 'ترمیم',
      save: 'محفوظ کریں'
    },
    form: {
      gender: 'جنس',
      email: 'اِی میل',
      password: ' پاسورڈ ',
      title: 'لقب',
      firstName: 'پہلا نام',
      lastName: 'آخری نام',
      desc: 'مزید',
      visible: 'فعال',
      order: 'ترتیب'
    }
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'ar',
  fallback: 'en',
  messages
})


