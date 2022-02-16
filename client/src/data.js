const products = [
  {
    id: 1,
    name: 'Conrow',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABcuJp8zEHvCckE4JD1M_vVee9y_uimyB_HZ_O_Ez7mz8cFLTgXnfauEwM-C5tk6jCqbYEmPGOXwZR3JGvE3_4bPracirL3LjsjKsovNuVfBAXMPJ2L1Kv22UEPTG45Zfhqh1aGenIi60zAHrsDxo-LUkr_qGg8UQGbxt2-_76PcO455oohaoNwRntiGk2RjLXMSsuErpuwbhRUDcMM4xZlrp6uijLOhrcRLO5q9-tO8o2dcjQwNSGSQvz4H3wOUi3sw2Jmz_65KKJVa-vvZ9nGNqjcKD_3BcSr2LGtYL9D3ic5gLQptTdTizIbFxvrtPdzDwgTqsrwS1MBiNIAm99AE2jFSRgEtgvNXoGwsPM_wyw/p.jpeg',
    description:
      'A haircut that looks so good, you will like to do it every day. This looks come at cheap too',
    price: 80.99,
    rating: 4.5,
    numberOfReviews: 2,
  },
  {
    id: 2,
    name: 'Young men haircut',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABdFk8ew23ar9dEHb_t6jDLJA_rBuOjGaw2BMjUD8M4760cYK9znZPACjuan9G9Bia9XPctA5hdSE8f9Aq_4jRJFpFoJ8W2pIKFk7MYa6JxHKUGjzL911vjxH9m4qDJLyhDkpH7XwiA3XsVOTjPpnAMM6U7sVw2bNqQswbYa1ahta-TX5ZFPK-i5TJ-GY2e71Ng-xhHymJLX2wk47Bcbr4uP6qrFtPYnhpvGp70dGXGIkd5oTBiBz2OVhjj-Wdl_e-bOwGUE3WCqb8QzRDEeB81jS4p8SbvQk76nF513U4nfVSl-kOYGXL_2LsaKhnVLyf3CPSffnATecmh6Bjaru4zAOAUPVT--TQUHVFJmpRSf2w/p.jpeg',
    description:
      'This look is suited for young men with style. Get if for your boy',
    price: 30.55,
    rating: 4.0,
    numberOfReviews: 8,
  },
  {
   
   id: 3,
   name: 'Beautiful makeup',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABcWEi6224kgAy6SceQaShVhXMOjWpfQbCvaGJRPQiADhraWvLPK8sTJH_Y2bj7ZJuVGUrpcqdMmc3zU0All1UBlo8kS2S_NqNZ6hxj6yke-15BdWe5zswEsKNySW3Mbd5rrTiDyeCDw-xIMqaOo4jhg9oYKUklJG21G_JyA6phpN4afQcSAMi8-0--kEdNGsOMdcF9yHxxHhtQtG0RFIWTIxdgtctnujlDi1L1AFHk1Mu1YSGmHW5PLUWSghrBxiMFsP95qoJ9Cww5QQ7zwUT-nW67GZtr21CLZlW4m56GwxjCQnwCLsfQ_PCgbfzOOJIRWkP8pQL-wxsKWaNFMsqFueCX4IeiovWhjXGR_TdUR-g/p.jpeg',
    description:
      'A very nice makeup. You can rock this to any occasion.',
    price: 40.00,
    rating: 4.0,
    numberOfReviews: 2,
  },
  {

    id: 4,
    name: 'Nice nails',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABfDk6DJnwUZOulDmLmgE6PU8sa3QJP78jgf2ZnUXAozLDNKKtfVmCAM8F0Ki2bnU9py_x0zh87Sxq0P6kOi7kqpOeqRPmqkbdIW_lzboSh43Ar4Hiv-t4_h18euV_ZTWUsfXxhUziAEwwW3owFc6eYXZCg3F5AjUjlLqcB0FmWBGZBYYpfGwgPdDoH2T6CInhaz5RDKDfgyrgpXO-7EwlFEm1ot-yC7jfEVe3AXkbp-jADZq8FIzUjZTwb0QWgtGj3OmSHdP6TvvIGfnTOzyzhgaQt0GN-W-FZRdaD2tTuMa_AGk6UljiTC2ELLuowpu8G1qa3r5moHIrkBYpFUzy61-3XxQSZ742Rnmj60RYH_yQ/p.jpeg',
    description:
      'This is a very nice nail. It is very cheap too',
    price: 25.00,
    rating: 4.5,
    numberOfReviews: 8,
  },
  {

    id: 4,
    name: 'Men hair braid',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABcd5_l1ISJ-eUYPTIyXu4pCjAK20LkNjJHBsDR6jzZnRRcnj-ubwM-qkgnl1JrTDqwMNk4Q-KqCW0_7L0AI4oV1xVHK0Ee9VAtFbmCfjdP5zMm8IsIeIoPl1VF1e3wG-k4y2H9CTlOCoKJjDFt3JVXVER8E1BAJF2NDUMxv_yc9Oa18GqlvdkYLPefQJyU4PvyozZOgvd74zg3iCtyhC7VGbiT_VK1LWLX5wNdWRgzbPGDnGhWoJ2qE0G9n9D0diFw4CXaPQwNbhwZLTOxhxnT5BfzQZw7XWS2MMuXJGlrpATKLv-TcXVyqtbTIQLg6QwDBKzApo5h2hAygWxhd4k-_jNzMmIy_vkVVIMvExZiLHw/p.jpeg',
    description:
      'This is mens haircut. It is very nice to rock',
    price: 50.00,
    rating: 4.0,
    numberOfReviews: 8,
  },
  {
    id: 5,
    name: 'Make up with red lipstick',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABc2egjkcNtx4Y6Pa1iLC5jLs8muLXKFmJwxuNMx65pq-NlxlCq25JGHVsDOmBllGCWawdoQsHgk_WKCLe3zbmTOXvCzRawUaHyTy0ApP0CLeU46Ms5oAKPDn75ssEf5zsT9uBJFkpHInCOJlHVynhsxKudqVRhteKOh2LzxGhulsAsaw5_2l-wxjn9Hjhz_X0YM4GV_IH53blMQ1OoAiMhtuM_cSUjUBdA8mJrBy3MN3Ri6O1gpanCTxOFC1HMGSHN4ExffkDSPNciM_DvJwv6_t1k1q1hjoHqPziumD8lmnlyFywQz1GOd6ZszuVG07BimF1ldWLPMxbv7Olf2pW826pvvgxWjL4kL9NZZ9NblPw/p.jpeg',
    description:
      'This is a very nice makeup and with red lipstick',
    price: 55.00,
    rating: 4.5,
    numberOfReviews: 4,
  },
  {
   
     id: 6,
    name: 'White colored nails',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABeOeDlcBey4xEXfYrL8XROkPNHmzKQF3LuppUKEMYUySreQQrOYK_62BcU_Szktkh8_SXJrp4b4wDG2a1h76tjYcoPypaeF5LE7Q9v8NOaFYSqQeEeHrK4YVu8mOQkq25i__OTbV9HnMs-e47D2kUM__v-kMIkR-18xpZju_iRVuxJdOHgtcXwvFOiEYvSVWAViA2onWM1yo7ntKWjfZ-9zFVkguqFOyi2C9t5g65mOGGvJCpzt_bQwNWXt1RdlemVuTBHTFJH-fv1z6bS3HuShvE7gSJSmFlmqC9fReHq3JRVR2bFSj3ruBe2wTUdVlVrM30SvaSd4aAW0sRmlrEPhJyfQD7yZHrftM2C_IIW3qw/p.jpeg',
    description:
      'This is a really nice nail color. It looks amazingly nice',
    price: 65.00,
    rating: 4.0,
    numberOfReviews: 8,
  },
  {
    id: 7,
    name: 'Mens haircut one',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABf4ZR9YdDJQ3Wsbfv4b5jEIn2rYsFT-Mqi-yLYQGVG8njaOw6jD8QOq9aZKStqxhwgAQK_mQJ3NAzFNXPlKYbVkKo2SivFlRyOIVATtVilf_453y2E8qJjNks5pPG-QybcuhaujWWzTv847EriFqxEASHc1rEmFNPttfd4tr6LpKLmuNUWcnPyfUlLP_AEKva8gcqBK6szI9KdoY8InTIRxppioXC01ziDzdugnagpEvK-RxC0X9vnbcnJ6kfz04871c_Yfps_neE_08Jstdp5o0-Ilzz1dIcXJVwZL8kRJfF7T6O0grBGWSPOeGdst7az-nCG4nY1wwajDh1zFlCkV6Is8F05VC6htKh55q8orOQ/p.jpeg',
    description:
      'This is a classic haircut that will make you look great.',
    price: 55.00,
    rating: 4.0,
    numberOfReviews: 8,
  },
  {
    id: 8,
    name: 'Colored nails for women',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABfngDIK4SwGLSbvf6Rn8N4bE2xnYKHlNrGm7B5WuNzFMTFImiaPpL5EqVHMben7HMDK1FM9MaqISSwtgsVt1w5McXA8Hx-d0AwrhUJwaTKaF7HjjVSNztjZXRk6smVQxf-A9Pm-T0OcM_99RyYi-WvyCKUipst-xdChEngx5Kq72q5vyWakAbYyrbEmFyexhIC0foNJiujsPxby_Og7XVMYmJO7ilySBHgfsU-mTZkjjZ95pp1zz63oqvYnv1qVNh1NgDesFGzzlKGnf-Xk52ergs38YdECqP-HKwy15x6s6AXeiYLY_UI6pcD4UiWY7pWZfUirf7KnZaLF0uMGf2rvANC-Erog-CAaCM2q-GiWlA/p.jpeg',
    description:
      'This is a rainbow nails for women. It looks really neat. ',
    price: 35.00,
    rating: 4.0,
    numberOfReviews: 51,
  },
  {

    id: 9,
    name: 'black and brown nails',
    imageUrlUrl: 'https://previews.dropbox.com/p/thumb/ABc2egjkcNtx4Y6Pa1iLC5jLs8muLXKFmJwxuNMx65pq-NlxlCq25JGHVsDOmBllGCWawdoQsHgk_WKCLe3zbmTOXvCzRawUaHyTy0ApP0CLeU46Ms5oAKPDn75ssEf5zsT9uBJFkpHInCOJlHVynhsxKudqVRhteKOh2LzxGhulsAsaw5_2l-wxjn9Hjhz_X0YM4GV_IH53blMQ1OoAiMhtuM_cSUjUBdA8mJrBy3MN3Ri6O1gpanCTxOFC1HMGSHN4ExffkDSPNciM_DvJwv6_t1k1q1hjoHqPziumD8lmnlyFywQz1GOd6ZszuVG07BimF1ldWLPMxbv7Olf2pW826pvvgxWjL4kL9NZZ9NblPw/p.jpeg',
    description:
      'This is a black and brown nails. We can come over to your hour and get you this service',
    price: 60.00,
    rating: 4.0,
    numberOfReviews: 5,
  },
  {
    id: 10,
    name: 'Long hair for women',
    imageUrl: 'https://previews.dropbox.com/p/thumb/ABcrdDQXFD1BFNOY_LrzI50LZ7grNCECQRT1RwB5Gc0HAE9Tm58KgR7xB1wpO7u2xZjIx5kglnQw2Jxfy3_sIhRoXvW4sqw5PWe9wrYvlSP7qZ21OJ_2-1IvxFtv5uy9pMEvObnMmE0y4qXHPtgf83TQa4gQfmhfbf9G9ZdJ4veUEDv3ARUtIzq4k881Lmr9vWkJJ_GA_neHnQPHuQOWLiZo7vjskUbfROaF-S-uxJCGtAauc355_F8g68U6FwnyLTtBo0Oz7ot_3Mi78DO4Kmb_yduB2GYwo-fdhMV0ZWjP61__I0VbcWDehYD3Oh4nFjPw56NaXC6PIR9UdlIlabsYLqb-hEXms11YTPhb0z9G-Q/p.jpeg',
    description:
      'This is a very nice haircut for women and the price is cheap too',
    price: 80.00,
    rating: 3.0,
    numberOfReviews: 3,
  },
]

export default products
