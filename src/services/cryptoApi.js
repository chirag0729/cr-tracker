// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const cryptoApiHeaders = {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': '3602a25766msh4c0bb093b7283ecp186000jsn60acc1e6b307'
// }

// const baseUrl = 'https://coinranking1.p.rapidapi.com';

// const createRequest = (url) => ({url, headers: cryptoApiHeaders})

// export const cryptoApi = createApi({
//     reducerPath: 'cryptoApi',
//     baseQuery: fetchBaseQuery( {baseUrl}),
//     endpoints : (builder) => ({
//         getCryptos: builder.query({
//             query: (count) => createRequest(`/coins?limit=${count}`)
//         }),
//         getCryptoDetails: builder.query({
//             query: (coinId) => createRequest(`/coin/${coinId}`)
//         }),
//         getCryptoHistory: builder.query({
//             query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
//         }),

//     })
// });

// export const {
//     useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '3602a25766msh4c0bb093b7283ecp186000jsn60acc1e6b307',
};
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery( {baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  
  useGetCryptoHistoryQuery,
} = cryptoApi;