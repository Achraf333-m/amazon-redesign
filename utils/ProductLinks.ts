import { makeUpState } from "@/states/searchState"
import { useRecoilState } from 'recoil'







const BaseMuApiUrl = 'http://makeup-api.herokuapp.com/api/v1/products.json'
const BooksApiUrl = 'https://www.googleapis.com/books/v1/volumes?q=the+hunger'


const GoogApiKey = process.env.PUBLIC_NEXT_API_KEY


const productLinks = {
    makeUpProducts:`${BaseMuApiUrl}?product_type=${makeUpState}`,
    booksProduct: `${BooksApiUrl}&key=${GoogApiKey}`
}

export default productLinks


