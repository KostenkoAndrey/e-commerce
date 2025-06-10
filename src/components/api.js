export const products = {
  id: 1,
  article: '100500',
  name: 'Тестовый товар для верстки',
  brand: 'Wezom',
  type: 'Группа 1',
  serialNumber: 'B410-210',
  inStock: true,
  rating: 5,
  reviewsCount: 15,
  reviews: [
    {
      author: 'Иванова Карина',
      date: '2021-05-21',
      rating: 5,
      content:
        'Покупка этой товара была спонтанной и незапланированной.\n' +
        'В течение часа прочитала отзывы и остановилась на этой модельке. Изначально знала, что пластины не съёмные, но плюсов было больше.\n' +
        'Спасибо за молниеносную отправку! 2 дня с момента заказа.\n' +
        'Единственный нюанс — всё-таки съёмные пластины удобнее, наверное.\n' +
        'Но по советам более опытных я ставила пергамент, но мыть всё равно сложновато.',
    },
    {
      author: 'Рогозин Тимур',
      date: '2021-05-17',
      rating: 4,
      content:
        'Покупка этого товара была спонтанной и незапланированной. В течение часа прочитала отзывы и остановился на этой модельке. Спасибо за молниеносную отправку!',
    },
    {
      author: 'Семенова Дарья',
      date: '2021-06-02',
      rating: 5,
      content:
        'Очень довольна покупкой! Пользуюсь уже неделю — всё работает отлично. Упаковка была надёжной, доставка — быстрой.',
    },
    {
      author: 'Мельник Алексей',
      date: '2021-06-10',
      rating: 3,
      content:
        'Ожидал немного большего за эти деньги. Работает стабильно, но качество пластика могло быть и получше.',
    },
    {
      author: 'Гордиенко Наталья',
      date: '2021-06-14',
      rating: 4,
      content:
        'Хороший товар за свою цену. Особенно порадовало наличие гарантийного талона. Рекомендую для повседневного использования.',
    },
  ],
  price: 3799,
  oldPrice: 4200,
  discount: '20%',
  promotion: {
    label: 'Акция',
    description: 'До 30 июля скидка — 20% на все тестовые товары',
  },
  images: [
    '/images/big-photo.png',
    '/images/product-2.png',
    '/images/product-3.png',
    '/images/product-4.png',
    '/images/product-5.png',
  ],
};

export const promo = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    group: 'Group',
    price: 3799,
    rating: 5,
    reviewsCount: 3,
    badge: 'top',
    inStock: true,
    image: '/images/spareParts-1.png',
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    group: 'Group',
    price: 711,
    rating: 5,
    reviewsCount: 44,
    badge: 'new',
    inStock: true,
    image: '/images/spareParts-1.png',
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    group: 'Group',
    price: 22105,
    rating: 4,
    reviewsCount: 11,
    badge: 'top',
    inStock: true,
    image: '/images/spareParts-2.png',
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    group: 'Group',
    price: 158,
    rating: 5,
    reviewsCount: 76,
    badge: null,
    inStock: false,
    image: '/images/spareParts-1.png',
  },
  {
    id: 5,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    group: 'Group',
    price: 1000,
    rating: 4,
    reviewsCount: 2,
    badge: 'new',
    inStock: true,
    image: '/images/spareParts-1.png',
  },
];
