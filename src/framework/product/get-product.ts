import client from '@framework/graphql/apollo-cilent'
import { gql } from '@apollo/client'

const GET_PRODUCT_DETAIL = gql`
query($url_key: String!){
    products(filter: {url_key: {eq: $url_key}}) {
      items {
        id
        sku
        name
        meta_title
        url_key
        description {
          html
        }
        price_range {
          minimum_price {
            final_price {
              value
              currency
            }
          }
        }
        thumbnail {
          disabled
          label
          position
          url
        }
      }
      total_count
    }
}
`

export const useProductQuery = async (urlKey: string) => {
    let { data } = await client.query({
        query: GET_PRODUCT_DETAIL,
        variables: {
            url_key: urlKey
        }
    })
    return data?.products;
}