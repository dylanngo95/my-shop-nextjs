import { gql } from '@apollo/client'
import client from '../lib/apollo-cilent'

type PageProps = {
    base_currency_code: string
    base_currency_symbol: string
}

function Page({ base_currency_code, base_currency_symbol }: PageProps) {
    return (
        <div>
            <p>ID {base_currency_code}</p>
            <p>Name {base_currency_symbol}</p>
        </div>
    )
}

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query {
                currency {
                    base_currency_code
                    base_currency_symbol
                }
            }
        `
    })
    console.log(data)
    return {
        props: {
            ...data.currency,
        },
    }
}

export default Page