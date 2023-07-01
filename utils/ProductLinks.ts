const BaseMuApiUrl = 
    "http://makeup-api.herokuapp.com/api/v1/products.json";
  const BooksApiUrl =
    "https://www.googleapis.com/books/v1/volumes?q=the+hunger";

  const GoogApiKey = process.env.PUBLIC_NEXT_API_KEY;

export const productLinks = {
    booksProduct: `${BooksApiUrl}&key=${GoogApiKey}`,
    fixedMakeUpProd: `${BaseMuApiUrl}?product_type=foundation`,
  };