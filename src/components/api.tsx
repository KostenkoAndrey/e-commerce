export interface Promo {
  id: number;
  title: string;
  group: string;
  price: number;
  rating: number;
  reviewsCount: number;
  badge: string | null;
  inStock: boolean;
  image: {
    small: string;
    large: string;
  };
}

export const products = {
  id: 1,
  article: '100500',
  name: 'Тестовый товар для верстки',
  productDescription: {
    Brand: 'Wezom',
    Type: 'Group 1',
    Serial_Number: 'B410-210',
    Country_Of_Origin: 'Germany',
    Material: 'Aluminum',
    Weight: '1.2 kg',
    Dimensions: '210×140×50 mm',
    Compatibility: 'Universal',
    Warranty: '24 months',
  },
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
      content: 'Ожидал немного большего за эти деньги. Работает стабильно, но качество пластика могло быть и получше.',
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
    {
      small: '/images/product-1-@1x.jpg',
      large: '/images/product-1-@2x.jpg',
    },
    {
      small: '/images/product-2-@1x.jpg',
      large: '/images/product-2-@2x.jpg',
    },
    {
      small: '/images/product-3-@1x.jpg',
      large: '/images/product-3-@2x.jpg',
    },
    {
      small: '/images/product-4-@1x.jpg',
      large: '/images/product-4-@2x.jpg',
    },
    {
      small: '/images/product-5-@1x.jpg',
      large: '/images/product-5-@2x.jpg',
    },
  ],
};

export const promo = [
  {
    id: 1,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    group: 'Group',
    price: 3799,
    rating: 5,
    reviewsCount: 3,
    badge: 'top',
    inStock: true,
    image: {
      small: '/images/spareParts-1-@1x.jpg',
      large: '/images/spareParts-1-@2x.jpg',
    },
  },
  {
    id: 2,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    group: 'Group',
    price: 711,
    rating: 5,
    reviewsCount: 44,
    badge: 'new',
    inStock: true,
    image: {
      small: '/images/spareParts-1-@1x.jpg',
      large: '/images/spareParts-1-@2x.jpg',
    },
  },
  {
    id: 3,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    group: 'Group',
    price: 22105,
    rating: 4,
    reviewsCount: 11,
    badge: 'top',
    inStock: true,
    image: {
      small: '/images/product-5-@1x.jpg',
      large: '/images/product-5-@2x.jpg',
    },
  },
  {
    id: 4,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    group: 'Group',
    price: 158,
    rating: 5,
    reviewsCount: 76,
    badge: null,
    inStock: false,
    image: {
      small: '/images/spareParts-1-@1x.jpg',
      large: '/images/spareParts-1-@2x.jpg',
    },
  },
  {
    id: 5,
    title:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    group: 'Group',
    price: 1000,
    rating: 4,
    reviewsCount: 2,
    badge: 'new',
    inStock: true,
    image: {
      small: '/images/spareParts-1-@1x.jpg',
      large: '/images/spareParts-1-@2x.jpg',
    },
  },
];
