import {APP_PREFIX_PATH} from 'configs/AppConfig'

const dashBoardNavTree = [
  {
    key: 'general',
    title: 'Основные',
    breadcrumb: true,
    submenu: [
      {
        key: 'general-dashboard',
        title: 'Дашборд',
        path: `${APP_PREFIX_PATH}/dashboard`,
        submenu: []
      },
      {
        key: 'general-planner',
        title: 'Планировщик',
        path: `${APP_PREFIX_PATH}/planner`,
        submenu: []
      },
      {
        key: 'general-catalog',
        title: 'Каталог',
        breadcrumb: true,
        submenu: [
          {
            key: 'general-catalog-products',
            title: 'Товары',
            path: `${APP_PREFIX_PATH}/catalog/products`,
            submenu: []
          },
          {
            key: 'general-catalog-categories',
            title: 'Категории',
            path: `${APP_PREFIX_PATH}/catalog/categories`,
            submenu: []
          },
          {
            key: 'general-catalog-collections',
            title: 'Коллекции',
            path: `${APP_PREFIX_PATH}/catalog/collections`,
            submenu: []
          },
          {
            key: 'general-catalog-combo',
            title: 'Комбо',
            path: `${APP_PREFIX_PATH}/catalog/combo`,
            submenu: []
          }
        ]
      },
      {
        key: 'general-orders',
        title: 'Заказы',
        path: `${APP_PREFIX_PATH}/orders`,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'general-clients',
        title: 'Клиенты',
        breadcrumb: true,
        submenu: [
          {
            key: 'general-client-list',
            title: 'Список клиентов',
            path: `${APP_PREFIX_PATH}/clients/list`,
            submenu: []
          },
          {
            key: 'general-client-groups',
            title: 'Группы клиентов',
            path: `${APP_PREFIX_PATH}/clients/groups`,
            submenu: []
          }
        ]
      },
      {
        key: 'general-banners',
        title: 'Баннеры',
        path: `${APP_PREFIX_PATH}/banners`,
        submenu: []
      },
      {
        key: 'general-promo',
        title: 'Промокоды',
        path: `${APP_PREFIX_PATH}/promo`,
        submenu: []
      },
      {
        key: 'general-location',
        title: 'Оффлайн точки',
        breadcrumb: true,
        submenu: [
          {
            key: 'general-location-addresses',
            title: 'Адреса',
            path: `${APP_PREFIX_PATH}/location/addresses`,
            submenu: []
          },
          {
            key: 'general-location-geozones',
            title: 'Геозоны',
            path: `${APP_PREFIX_PATH}/location/geozones`,
            submenu: []
          }
        ]
      },
      {
        key: 'general-employees',
        title: 'Сотрудники',
        path: `${APP_PREFIX_PATH}/employees`,
        submenu: []
      },
      {
        key: 'general-spam',
        title: 'Рассылки',
        path: `${APP_PREFIX_PATH}/spam`,
        submenu: []
      }
    ]
  },
  {
    key: 'system',
    title: 'Системные',
    breadcrumb: true,
    submenu: [
      {
        key: 'system-settings',
        title: 'Настройки',
        path: `${APP_PREFIX_PATH}/settings`,
        submenu: []
      },
      {
        key: 'system-mobileapp',
        title: 'Мобильное приложение',
        path: `${APP_PREFIX_PATH}/mobile-app`,
        submenu: []
      },
      {
        key: 'system-bugs',
        title: 'Логи',
        path: `${APP_PREFIX_PATH}/bugs`,
        submenu: []
      }
    ]
  }
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
