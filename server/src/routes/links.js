
import { Router } from 'express';

export default Router().get('/', (_, res) => {
  res.json(
    [
      { id: 1, url: 'https://react.dev/' },
      { id: 2, url: 'https://vite.dev/' },
      { id: 3, url: 'https://goodsie.ca' }
    ]
  );
});
